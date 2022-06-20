import React, { useCallback } from 'react';
import { useState } from 'react';
import generateProducts from '../data/generateProducts';
import styles from '../styles/productList.module.css';

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
    <div className={styles.basicGrid}>
      {filteredProducts.map((product, i) => (
        <div key={i} className={styles.card}>
          {product}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
