import { useEffect, useState } from 'react';
import './VariantComponent.scss';
import BottomSheet from '@/components/lib/bottomsheet/BottomSheet';
import Image from 'next/image';
import SelectionVariantComponent from '../SelectionVariantComponent/SelectionVariantComponent';
import { ProductVariant, VariantGroup } from '@/domain/models/GetDetailproduct';
import { useProductStore } from '@/store/useProductStore';
import useCurrency from '@/hook/useOriginalCurrency';


interface  VariantComponentProps {
      variant_group: VariantGroup[],
      variants: ProductVariant[]
}
const VariantComponent: React.FC<VariantComponentProps> = ({variant_group, variants}) => {
      const [isOpen, setIsOpen] = useState(false);
      const { selectedProduct } = useProductStore();
      const [selectedLabel, setSelectedLabel] = useState<Record<string, string>>({});
      const [selectedVariant, setSelectedVariant] = useState<ProductVariant>();

      useEffect(() => {
            selectedVariantAndLabel();
      }, [selectedProduct]);

      const selectedVariantAndLabel = () => {
            const a = variants.find(v => v.id === selectedProduct);

            setSelectedVariant(a)

            const result: Record<string, string> = {};

            variant_group.forEach(field => {
                  const selectedOption = field.options.find(option => option.id === a?.variantValues[field.key]);
                  if (selectedOption) {
                        result[field.key] = selectedOption.label;
                  }
            });

            setSelectedLabel(result);
      };


      return (
            <>
            <section className='variant-section'>
                  <div className="title">Pilih Variasi Product</div>

                  <div className="variant-block">
                        <span className='selection'>
                              {variant_group.map((item, index) => (
                                    <span key={index}> {selectedLabel[item.key]}{index !== variant_group.length - 1 ? ',' : ''} </span>
                              ))}
                        </span>
                        <button onClick={() => setIsOpen(true)} className='see-all'>Lihat Semua</button>
                  </div>
            </section>

            <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} fullHeight={true}>

                 <div className="variant-bottomsheet">
                        <section className="head">
                              <div className="title">Ringkasan Pesanan Anda</div>
                              <button onClick={() => setIsOpen(false)}>
                                    <Image src="/assets/icons/x.svg" width={24} height={24} alt="close" />
                              </button>
                        </section>

                        <section className='bottomsheet-info'>
                              <div className="bottomsheet-info-image">
                                    <Image src="https://picsum.photos/1280/720" width={64} height={64} alt="close" priority={false} />
                              </div>
                              <div className="bottomsheet-info-variant">
                                    {variant_group.map((item, index) => (
                                          <div key={index} className="bottomsheet-info-variant-item">
                                                <span className='bottomsheet-info-variant-item-key'>{item.name}</span>
                                                <span className='bottomsheet-info-variant-item-value'>
                                                      {selectedLabel[item.key]}
                                                </span>
                                          </div>
                                    ))}

                                    <div className="bottomsheet-info-variant-price">
                                          {useCurrency(selectedVariant?.price || 0)}
                                    </div>

                                    <div className="bottomsheet-info-variant-strikeout">
                                          <span className='bottomsheet-info-variant-strikeout-prc'>{useCurrency(selectedVariant?.originalPrice || 0)}</span>
                                          <span className='bottomsheet-info-variant-strikeout-discount'>{selectedVariant?.discountPercentage}%</span>  
                                    </div>
                              </div>
                        </section>

                       <SelectionVariantComponent
                              variant_group={variant_group}
                              variant={variants}>
                       </SelectionVariantComponent> 

                       <div className="bottom-section">
                              <button>Beli Sekarang</button>
                       </div>
                 </div>
                 
            </BottomSheet>
            </>
      )
}

export default VariantComponent