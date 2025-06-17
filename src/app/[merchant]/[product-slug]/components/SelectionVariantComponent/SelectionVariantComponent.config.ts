import type { ProductVariant, VariantGroup } from "@/domain/models/GetDetailproduct";

export function selectFirstLoad(varaint: ProductVariant[]): ProductVariant | undefined {
    return varaint.find(a => a.available);
}

export function selectChips(
    varaint: ProductVariant[],
    variant_group: VariantGroup[],
    variantKey: string,
    optionId: string): ProductVariant | undefined {
    const vGroup = selectChipConfig(variant_group, variantKey, optionId);

    const result = vGroup.reduce<{ [key: string]: string }>((acc, item) => {
        const activeOption = item.options.find(option => option.isActive);
        if (activeOption) {
            acc[item.key] = activeOption.id;
        }
        return acc;
    }, {});

    const foundProduct = varaint.find(product =>
        Object.keys(result).every(key =>
            product.variantValues[key] === result[key]
        )
    );

    return foundProduct;
}

export function activateChips(variant_group: VariantGroup[], selected: ProductVariant | undefined): VariantGroup[] {
    if (!selected) return variant_group;


    const updatedVariantGroup = variant_group.map(vg => {
     
        const updatedOptions = vg.options.map(o => ({
            ...o,
            isActive: false, 
        }));

      
        for (const key in selected.variantValues) {
            if (selected.variantValues.hasOwnProperty(key)) {
                if (vg.key === key) {
                   
                    const updatedOption = updatedOptions.map(option => 
                        option.id === selected.variantValues[key]
                            ? { ...option, isActive: true }
                            : option
                    );

                    return { ...vg, options: updatedOption }; 
                }
            }
        }

        return { ...vg, options: updatedOptions };
    });

    return updatedVariantGroup;
}

export function selectChipConfig(variant_group: VariantGroup[], variantKey: string, optionId: string): VariantGroup[] {
    const updatedVariantGroup = variant_group.map(variant => {
            
        if (variant.key === variantKey) {

            const updatedOptions = variant.options.map(option => {
               
                const updatedOption = { ...option, isActive: false };

                if (option.id === optionId) {
                    updatedOption.isActive = true;
                }

                return updatedOption;
            });

            return { ...variant, options: updatedOptions };
        }

        return variant;
    });

    return updatedVariantGroup;
}

export function disabledChips(selected: ProductVariant, variant: ProductVariant[], variant_group: VariantGroup[]): VariantGroup[] {

    console.log('selected.variantValues', selected.variantValues, variant_group.length)

    let allUpdatedFilters = variant_group;

    for (const [key, value] of Object.entries(selected.variantValues)) {
        const filtered = variant.filter(item =>
            item.variantValues[key] === value && item.available === false
        );

        const updatedFilters = allUpdatedFilters.map(filter => ({
            ...filter,
            options: filter.options.map(option => {
                const wasDisabled = option.isDisabled || false;

                const isNowDisabled = filtered.some(f => 
                    countMatchingVariants(selected.variantValues, f.variantValues) > (variant_group.length - 2) ?
                    option.id === f.variantValues[filter.key] && !option.isActive : false
                );

                return {
                    ...option,
                    isDisabled: isNowDisabled || wasDisabled
                };
            })
        }));

        allUpdatedFilters = updatedFilters;

        console.log('filteredfiltered---->', key, value,filtered);
        console.log('allUpdatedFilters ITERATION', allUpdatedFilters);
    }

    console.log('allUpdatedFilters OUTSIDE', allUpdatedFilters)

    return allUpdatedFilters;
}

export function handleProductPath(variantId?: string) {
    if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        const segments = path.split('/');

        // Ensure we get the correct product name from the URL (position 2 is usually product name)
        const productName = segments[2] || ''; 
        
        // Clean variantId by getting only the first segment (e.g., "v1", "v9", etc.)
        const cleanedVariantId = variantId?.split('-')[0];

        // Remove any extra occurrences of variantId after the first one
        const updatedPath = path.replace(/(-v\d+)+$/, ''); // This regex removes the repeated variantId (e.g., "-v1-v1-v1")

        // Update the URL only if the new variantId path is different
        window.history.pushState(null, '', updatedPath + `-${cleanedVariantId}`);

        // Return product name (without extra repetitions)
        return productName;
    }
}

export function isVariantIdInUrl(): boolean {
    if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        const segments = path.split('/');

        // Ensure we have the correct product name with the variant ID (position 2 is usually product name)
        const productNameWithVariant = segments[2] || '';

        // Extract the part of the productName after the first hyphen (this should be the variant ID)
        const variantPart = productNameWithVariant.split('-')[1]; // Get the second part after '-'

        // Check if the variant ID exists (i.e., not undefined or empty)
        return variantPart ? true : false;
    }

    return false;
}

export function getVariantIdHasSet(): string {
    const url = window.location.pathname;
    // Extract the string after the last '/' to get 'productname-v1'
    const productString = url.split('/').pop() || '';

    // Split the string at the '-' to separate product name and variant id
    const [, variantId] = productString.split('-');

    return variantId;
}

export function removeLastValueAfterHyphen(input: string): string {
    const lastIndex = input.lastIndexOf('-');
    if (lastIndex === -1) return input;  // No hyphen found
    return input.slice(0, lastIndex);
}

export function getOriginalProductPath() {
    if (typeof window !== 'undefined') {
        const url = window.location.pathname;

        const result = removeLastValueAfterHyphen(url);

        window.history.pushState(null, '', result);
        
        return result;
    }

   return '';
}

function countMatchingVariants(selected: Record<string, string>, variantValues: Record<string, string>): number {
    let matchCount = 0;

    for (const key in selected) {
        // Check if the key exists in variantValues and matches the value in selected
        if (variantValues.hasOwnProperty(key) && selected[key] === variantValues[key]) {
            matchCount++;
        }
    }

    return matchCount;
}