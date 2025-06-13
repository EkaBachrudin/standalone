import { VariantGroup, ProductVariant } from '@/domain/models/GetDetailproduct';
import { activateChips, handleProductPath, isVariantIdInUrl, selectChips, selectFirstLoad } from './SelectionVariantComponent.config';
import { useEffect, useState } from 'react';
import './SelectionVariantComponent.scss';

interface SelectionVariantComponentProps {
      variant_group: VariantGroup[],
      variant: ProductVariant[]
}

const SelectionVariantComponent: React.FC<SelectionVariantComponentProps> = ({variant_group, variant}) => {
      const [variantGroup, setVariantGroup] = useState<VariantGroup[]>([]);
      const [productName, setProductName] = useState<string | undefined>('');

      useEffect(() => {
            if(!isVariantIdInUrl()) {
                  const firstSelection = selectFirstLoad(variant);

                  const updatedVariantGroup = activateChips(variant_group, firstSelection);
            
                  setVariantGroup(updatedVariantGroup);
            
                  const getProductName = handleProductPath(firstSelection?.id);

                  setProductName(getProductName);
            }
      }, []);
      

      function selectChip(variantKey: string, optionId: string) {
            const select = selectChips(variant, variantGroup, variantKey, optionId);
            
            const a = activateChips(variantGroup, select);

            setVariantGroup(a);

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
                                                className={`${dataOption.isActive ? 'variant-selection-group-item-active' : 'variant-selection-group-item-value'}`}
                                                key={keyIndex}
                                                onClick={() => selectChip(data.key, dataOption.id)}
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