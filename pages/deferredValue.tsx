import { useState, useTransition } from 'react';
import ProductList from '../components/ProductList';
import generateProducts from '../data/generateProducts';
import styles from '../styles/deferredValue.module.css';
const dummyProducts = generateProducts();

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: any) {
    // startTransition(() => {
    //   setFilterTerm(event.target.value);
    // });
    setFilterTerm(event.target.value);
  }

  return (
    <div className={styles.app}>
      <input
        type="text"
        onChange={updateFilterHandler}
        className={styles.input}
      />
      {/* {isPending && <p style={{color: 'white'}}>Updating List...</p>} */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
