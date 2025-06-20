import { VariantGroup, ProductVariant } from '@/domain/models/GetDetailproduct';
import { activateChips, disabledChips, getVariantIdHasSet, handleProductPath, isVariantIdInUrl, selectChips, selectFirstLoad } from './SelectionVariantComponent.config';
import { useEffect, useState } from 'react';
import './SelectionVariantComponent.scss';
import { useProductStore } from '@/store/useProductStore';

interface SelectionVariantComponentProps {
      variant_group: VariantGroup[],
      variant: ProductVariant[]
}

const SelectionVariantComponent: React.FC<SelectionVariantComponentProps> = ({variant_group, variant}) => {
      const [variantGroup, setVariantGroup] = useState<VariantGroup[]>([]);
      const [, setProductName] = useState<string | undefined>('');
      const { setSelectedProduct } = useProductStore();

      useEffect(() => {
            if(!isVariantIdInUrl()) {
                  const firstSelection = selectFirstLoad(variant);

                  let updatedVariantGroup = activateChips(variant_group, firstSelection);

                  if(firstSelection) updatedVariantGroup = disabledChips(firstSelection, variant, updatedVariantGroup)
            
                  setVariantGroup(updatedVariantGroup);
            
                  const getProductName = handleProductPath(firstSelection?.id);

                  setProductName(getProductName);
            } else {
                  const variantId = getVariantIdHasSet();

                  const activateVariant  = variant.find(a => a.id === variantId);

                  let updatedVariantGroup = activateChips(variant_group, activateVariant);

                  if(activateVariant) updatedVariantGroup = disabledChips(activateVariant, variant, updatedVariantGroup)
            
                  setVariantGroup(updatedVariantGroup);
            
                  const getProductName = handleProductPath(variantId);

                  setProductName(getProductName);
            }
      }, [variant, variant_group]);
      

      function selectChip(variantKey: string, optionId: string) {
            const select = selectChips(variant, variantGroup, variantKey, optionId);

            if(select) setSelectedProduct(select?.id);
            
            let updatedVariantGroup = activateChips(variant_group, select);

            if(select) updatedVariantGroup = disabledChips(select, variant, updatedVariantGroup);

            setVariantGroup(updatedVariantGroup);

            const getProductName = handleProductPath(select?.id);

            setProductName(getProductName);
      }
      
      return (
            <>
            <section className="variant-selection">
                  <div className="variant-selection-title">
                        PIlih Variasi
                  </div>

                  {variantGroup?.map((data, index) => (
                        <div className="variant-selection-group" key={index}>
                               <div className="variant-selection-group-title">
                                    {data?.name}
                              </div>

                               <div className="variant-selection-group-item">

                                    {data.options.map((dataOption, keyIndex) => (
                                          <div
                                                className={`${dataOption.isActive ? 'variant-selection-group-item-active' : dataOption.isDisabled ? `variant-selection-group-item-disabled` : `variant-selection-group-item-value`}`}
                                                key={keyIndex}
                                                onClick={() => {if(!dataOption.isDisabled) selectChip(data.key, dataOption.id)}}
                                                >
                              
                                                {dataOption.label} 
                                          
                                          </div>
                                    ))}

                              </div>
                        </div>
                  ))}

            </section>
            </>
      )
}

export default SelectionVariantComponent;