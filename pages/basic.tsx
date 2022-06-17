import { useState } from 'react';
import ProductList from '../components/ProductListWithoutDeferred';
import styles from '../styles/deferredValue.module.css';

function App() {
  const [filterTerm, setFilterTerm] = useState('');

  function updateFilterHandler(event: any) {
    setFilterTerm(event.target.value);
  }

  return (
    <div className={styles.app}>
      <input
        type="text"
        onChange={updateFilterHandler}
        className={styles.input}
      />
      <ProductList filterText={filterTerm} />
    </div>
  );
}

export default App;
