import { useEffect, useState } from 'react';
import { Basket } from './components/Basket';
import { Products } from './components/Products';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  prices: Price[];
  count: number;
}

interface Price {
  amount: number;
  currency: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [basketItems, setBasketItems] = useState<Product[]>([]);

  const addToBasket = (product: Product) => {
    const exist = basketItems.find(item => item.id === product.id);
    if (exist) {
      setBasketItems(basketItems.map(item => item.id === product.id ? {...exist, count: exist.count + 1} : item));
    } else {
      setBasketItems([...basketItems, {...product, count : 1 }]);
    }
  }

  const removeFromBasket = (product: Product) => {
    const exist = basketItems.find(item => item.id === product.id);
    if (exist && exist.count > 1) {
      setBasketItems(basketItems.map(item => item.id === product.id ? {...exist, count: exist.count - 1} : item));
    } else {
      setBasketItems(basketItems.filter(item => item.id !== product.id));
    }
  }

  useEffect(() => {
    fetch('/products', { credentials: 'include' })
    .then(
    response =>
      response.ok
        ? response.json()
        : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
    )
    .then((products) => {
        setProducts(products);
    })
    .catch(err => console.log(err));
  }, []);
  
  return (
    <div style={styles.container}>
      <Products addToBasket={addToBasket} products={products} />
      <Basket basketItems={basketItems} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />
    </div>
  );
}

export default App; 

export const styles = {
  container: {
    'display': 'flex',
    'fontFamily': 'Roboto, sans-serif',
  },
  block: {
    'backgroundColor': '#d2e2f7',
    'padding': '1rem',
    'margin': '0.5rem',
    'borderRadius': '0.5rem',
    'width': '300px',
  },
  image: {
   'height': '100px',
  },
  basketImage: {
    'height': '40px',
  },
  bigFont: {
    'fontSize': '16px',
  },
  smallFont: {
    'fontSize': '12px',
  },
};