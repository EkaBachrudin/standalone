import { useState } from 'react';
import './VariantComponent.scss';
import BottomSheet from '@/components/lib/bottomsheet/BottomSheet';
import Image from 'next/image';
import SelectionVariantComponent from '../SelectionVariantComponent/SelectionVariantComponent';
import { ProductVariant, VariantGroup } from '@/domain/models/GetDetailproduct';


interface  VariantComponentProps {
      variant_group: VariantGroup[],
      variants: ProductVariant[]
}
const VariantComponent: React.FC<VariantComponentProps> = ({variant_group}) => {
      const [isOpen, setIsOpen] = useState(false);
      
      return (
            <>
            <section className='variant-section'>
                  <div className="title">Pilih Variasi Product</div>

                  <div className="variant-block">
                  <span className='selection'>Platinum, Semua Perangkat, 9</span>
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
                                    <Image src="https://picsum.photos/1280/720" width={64} height={64} alt="close" />
                              </div>
                              <div className="bottomsheet-info-variant">
                                    <div className="bottomsheet-info-variant-item">
                                          <span className='bottomsheet-info-variant-item-key'>Jenis Paket</span>
                                          <span className='bottomsheet-info-variant-item-value'>Platinum</span>
                                    </div>
                                     <div className="bottomsheet-info-variant-item">
                                          <span className='bottomsheet-info-variant-item-key'>Jenis Paket</span>
                                          <span className='bottomsheet-info-variant-item-value'>Platinum</span>
                                    </div>
                                     <div className="bottomsheet-info-variant-item">
                                          <span className='bottomsheet-info-variant-item-key'>Jenis Paket</span>
                                          <span className='bottomsheet-info-variant-item-value'>Platinum</span>
                                    </div>

                                    <div className="bottomsheet-info-variant-price">
                                          Rp54.000 
                                    </div>

                                    <div className="bottomsheet-info-variant-strikeout">
                                          <span className='bottomsheet-info-variant-strikeout-prc'>Rp 330.000</span>
                                          <span className='bottomsheet-info-variant-strikeout-discount'>10%</span>  
                                    </div>
                              </div>
                        </section>

                       <SelectionVariantComponent
                              variant_group={variant_group}>
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