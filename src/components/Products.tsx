import { Product } from './Product';

export const Products = (props) => {
    const { products, addToBasket } = props;
  
    return (
        <div>
            {products.map((product) =>
                <Product key={product.id} product={product} addToBasket={addToBasket} />
            )}
        </div>
    );
}