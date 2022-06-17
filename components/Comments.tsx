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
    <>
      {data.map((comment: any, i: number) => (
        <p className="comment" key={i}>
          {comment?.name}
        </p>
      ))}
    </>
  );
}
