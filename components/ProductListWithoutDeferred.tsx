import React, { useCallback } from 'react';
import { useDeferredValue, useState } from 'react';
import generateProducts from '../data/generateProducts';
import styles from '../styles/deferredValue.module.css';

const dummyProducts = generateProducts();
function ProductList({ filterText }: { filterText: string }) {
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);

  const getfilterProducts = useCallback((filterTerm: string): string[] => {
    if (!filterTerm) {
      return dummyProducts;
    }
    return dummyProducts.filter((product) => product.includes(filterTerm));
  }, []);

  React.useEffect(() => {
    const newProductList: string[] = getfilterProducts(filterText);
    setFilteredProducts(newProductList);
  }, [getfilterProducts, filterText]);

  return (
    <ul className={styles.ul}>
      {filteredProducts.map((product, i) => (
        <li key={i} className={styles.li}>
          {product}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
