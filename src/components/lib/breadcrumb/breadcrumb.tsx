import Link from 'next/link';
import './breadcrumb.scss';

const Breadcrumb: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumbs">
            <ol className='breadcrumbList'>
                {items.map((item, index) => (
                    <li key={index} className='breadcrumbItem'>
                        {index < items.length - 1 ? (
                            <Link href={item.href}>
                                {item.label}
                            </Link>
                        ) : (
                            <span className='active'>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
