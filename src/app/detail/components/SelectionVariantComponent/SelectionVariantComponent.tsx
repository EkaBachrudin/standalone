import { VariantGroup } from '@/domain/models/GetDetailproduct';
import './SelectionVariantComponent.scss'

interface SelectionVariantComponentProps {
      variant_group: VariantGroup[]
}

const SelectionVariantComponent: React.FC<SelectionVariantComponentProps> = ({variant_group}) => {
      return (
            <>
            <section className="variant-selection">
                  <div className="variant-selection-title">
                        PIlih Variasi
                  </div>

                  {variant_group?.map((data, variant_group_index) => (
                        <div className="variant-selection-group" key={variant_group_index}>
                               <div className="variant-selection-group-title">
                                    {data?.name}
                              </div>

                               <div className="variant-selection-group-item">

                                    {data.options.map((dataOption, keyIndex) => (
                                          <div className="variant-selection-group-item-value" key={keyIndex}>
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