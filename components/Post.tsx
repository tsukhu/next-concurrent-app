import useSWR from 'swr';

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return new Promise((resolve) =>
    setTimeout(() => {
      return resolve(res.json());
    }, 1000)
  );
};

export default function Post() {
  const { data }: any = useSWR(
    'https://jsonplaceholder.typicode.com/posts/5',
    fetcher,
    { suspense: true }
  );
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
}
