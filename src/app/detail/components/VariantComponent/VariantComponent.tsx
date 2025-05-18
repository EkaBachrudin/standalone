import { useState } from 'react';
import './VariantComponent.scss'
import BottomSheet from '@/components/lib/bottomsheet/BottomSheet';
import Image from 'next/image';

const VariantComponent: React.FC = () => {
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

            <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
                 <div className="variant-selection-bottomsheet">
                        <section className="head">
                              <div className="title">Ringkasan Pesanan Anda</div>
                              <button onClick={() => setIsOpen(false)}>
                                    <Image src="/assets/icons/x.svg" width={24} height={24} alt="close" />
                              </button>
                        </section>

                        <section className='selection-info'>
                              <div className="selection-info-image">
                                    <Image src="https://picsum.photos/1280/720" width={64} height={64} alt="close" />
                              </div>
                              <div className="selection-info-variant">
                                    <div className="selection-info-variant-item">
                                          <span className='selection-info-variant-item-key'>Jenis Paket</span>
                                          <span className='selection-info-variant-item-value'>Platinum</span>
                                    </div>
                                     <div className="selection-info-variant-item">
                                          <span className='selection-info-variant-item-key'>Jenis Paket</span>
                                          <span className='selection-info-variant-item-value'>Platinum</span>
                                    </div>
                                     <div className="selection-info-variant-item">
                                          <span className='selection-info-variant-item-key'>Jenis Paket</span>
                                          <span className='selection-info-variant-item-value'>Platinum</span>
                                    </div>
                              </div>
                        </section>
                 </div>
            </BottomSheet>
            </>
      )
}

export default VariantComponent