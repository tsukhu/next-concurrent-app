import useSWR from 'swr';
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
    <>
      <h1>Users</h1>
      <ul>
        {data.map((user: any, i: number) => (
          <li key={i}>{user?.name}</li>
        ))}
      </ul>
    </>
  );
}
