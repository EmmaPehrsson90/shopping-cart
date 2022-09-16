import { styles } from '../App';

interface Product {
    id: number;
    title: string;
    imageUrl: string;
    prices: Price[];
    count: number;
  }
  
  interface Price {
    amount: number;
    currency: string;
  }
  
export const Basket = (props) => {
    const { basketItems, addToBasket, removeFromBasket } = props;

    const sum = basketItems.reduce((x:number, current:Product) => x + current.prices[0].amount * current.count, 0)
   
    return (
        <div>
            <h2>Varukorg</h2>
            {basketItems.map((product:Product, index:number) => 
              <div key={index}>
                <p style={styles.bigFont} key={index}>
                  <img style={styles.basketImage} alt="product" src={product.imageUrl}/>
                    {product.title}
                    <span style={styles.smallFont}> {product.count} x {product.prices[0].amount} {product.prices[0].currency}</span>
                </p>
                  <button onClick={()=>removeFromBasket(product)}>-</button>
                  <button onClick={()=>addToBasket(product)}>+</button>
              </div>
            )}
             {sum === 0 ?  <p>Varukorgen är tom</p> : <p>Summa: {sum.toFixed(2)} SEK</p>}
        </div>
    );
}