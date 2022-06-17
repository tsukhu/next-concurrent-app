import { useState, useTransition } from 'react';
import ProductList from '../components/ProductListWithoutDeferred';
import styles from '../styles/deferredValue.module.css';

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  function updateFilterHandler(event: any) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  }

  return (
    <div className={styles.app}>
      <input
        type="text"
        onChange={updateFilterHandler}
        className={styles.input}
      />
      {isPending && <p>Updating List...</p>}
      <ProductList filterText={filterTerm} />
    </div>
  );
}

export default App;
