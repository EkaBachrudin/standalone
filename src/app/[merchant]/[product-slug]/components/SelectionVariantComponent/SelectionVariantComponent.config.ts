import type { ProductVariant, VariantGroup } from "@/domain/models/GetDetailproduct";

export function selectFirstLoad(varaint: ProductVariant[]): ProductVariant | undefined {
    return varaint.find(a => a.available);
}

export function activateChips(variant_group: VariantGroup[], selected: ProductVariant | undefined): VariantGroup[] {
    if (!selected) return variant_group;

    for (const key in selected.variantValues) {
        if (selected.variantValues.hasOwnProperty(key)) {

            const matchVariant = variant_group.find(e => e.key === key);
            
            if (matchVariant) {
                const matchOption = matchVariant.options.find(option => option.id === selected.variantValues[key]);

                if (matchOption) {
                    matchOption.isActive = true;
                }
            }
        }
    }

    return variant_group;
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