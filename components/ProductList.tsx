import { useDeferredValue } from 'react';
import styles from '../styles/deferredValue.module.css';

function ProductList({ products }: { products: string[] }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul className={styles.ul}>
      {deferredProducts.map((product, i) => (
        <li key={i} className={styles.li}>
          {product}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
