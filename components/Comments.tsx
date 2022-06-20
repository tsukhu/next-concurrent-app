import useSWR from 'swr';
import styles from '../styles/comments.module.css';

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return new Promise((resolve) =>
    setTimeout(() => {
      return resolve(res.json());
    }, 5000)
  );
};
export default function Comments() {
  const { data }: any = useSWR(
    'https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10',
    fetcher,
    { suspense: true }
  );
  return (
    <div className={styles.comments}>
      {Array.isArray(data) &&
        data.map((comment: any, i: number) => (
          <p className={styles.comment} key={i}>
            {comment?.name}
          </p>
        ))}
    </div>
  );
}
