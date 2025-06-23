import { useEffect, useRef, useState } from 'react';
import './DescriptionComponent.scss'

interface descriptionComponentProps {
  content: string
  title: string;
}

const DescriptionComponent: React.FC<descriptionComponentProps> = ({ content, title }) => {
      const contentRef = useRef<HTMLDivElement>(null);
      const [isExpanded, setIsExpanded] = useState(false);
      const [shouldShowButton, setShouldShowButton] = useState(false);

      useEffect(() => {
            setTimeout(() => {
                  if (contentRef.current && contentRef.current.scrollHeight > 150) {
                  setShouldShowButton(true);
                  }
            }, 100);
      }, []);

      return (
            <>
            <section className='description-section'>
                    <div className="title">{title}</div>
                    <div
                        ref={contentRef}
                        className={`prose transition-all duration-300 overflow-hidden text-f-12 md:text-f-14 ${
                            isExpanded ? 'max-h-[2000px]' : 'max-h-[150px]'
                        }`}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />

                    {shouldShowButton && (
                        <button
                        className="text-blue-600 font-poppins-bold text-secondary-rzaBlue text-f-12"
                        onClick={() => setIsExpanded((prev) => !prev)}
                        >
                        {isExpanded ? 'Sembunyikan' : 'Lihat Selengkapnya'}
                        </button>
                    )}
                </section>
            </>
      );
}

export default DescriptionComponent;