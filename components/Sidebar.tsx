import useSWR from 'swr';
import styles from '../styles/sideBar.module.css';
const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};
export default function Sidebar() {
  const { data } = useSWR(
    'https://jsonplaceholder.typicode.com/users?_start=0&_limit=10',
    fetcher,
    { suspense: true }
  );
  return (
    <div className={styles.sideBar}>
      <h1>Users</h1>
      <ul className={styles.ul}>
        {data.map((user: any, i: number) => (
          <li key={i} className={styles.li}>
            {user?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
