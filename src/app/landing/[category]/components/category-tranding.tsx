// import bgProduct from '/assets/images/bg-product.svg';

interface TrandingListProps {
    productListData?: any;
}

const ProductList: React.FC<TrandingListProps> = ({productListData}) => {
    if (!productListData || !productListData.productList.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
            
        </>
    )
}

export default ProductList;