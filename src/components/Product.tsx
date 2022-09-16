import { styles } from '../App';

export const Product = (props) => {
    const { product, addToBasket } = props;
    return (
        <div style={styles.block}>
            <p><strong>{product.title}</strong></p>
            <p>{product.prices[0].amount} {product.prices[0].currency}</p>
            <img style={styles.image} alt="product" src={product.imageUrl}/>
            <div>
                <button onClick={() => addToBasket(product)}>Lägg till</button>
            </div>
        </div>
    );
}