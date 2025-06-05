import { VariantGroup, ProductVariant } from '@/domain/models/GetDetailproduct';
import { activateChips, selectChipConfig, selectFirstLoad } from './SelectionVariantComponent.config';
import { useEffect, useState } from 'react';
import './SelectionVariantComponent.scss'
interface SelectionVariantComponentProps {
      variant_group: VariantGroup[],
      varaint: ProductVariant[]
}

const SelectionVariantComponent: React.FC<SelectionVariantComponentProps> = ({variant_group, varaint}) => {
      const firstSelection = selectFirstLoad(varaint);
      const _ = activateChips(variant_group, firstSelection);
      const [variantGroup, setVariantGroup] = useState<VariantGroup[]>(_);

      function selectChip(variantKey: string, optionId: string) {
            const updatedVariantGroup = selectChipConfig(variantGroup, variantKey, optionId)

            setVariantGroup(updatedVariantGroup);
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