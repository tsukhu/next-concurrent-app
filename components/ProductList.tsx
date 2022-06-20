import { useDeferredValue } from 'react';
import styles from '../styles/productList.module.css';

function ProductList({ products }: { products: string[] }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <div className={styles.basicGrid}>
      {deferredProducts.map((product, i) => (
        <div key={i} className={styles.card}>
          {product}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
