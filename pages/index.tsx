import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar';
import Spinner from '../components/Spinner';

const Comments = dynamic(() => import('../components/Comments'), {
  suspense: true,
});
const Sidebar = dynamic(() => import('../components/Sidebar'), {
  suspense: true,
});
const Post = dynamic(() => import('../components/Post'), {
  suspense: true,
});

function Content() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <NavBar />
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <article className="post">
          <Suspense fallback={<Spinner />}>
            <Post />
          </Suspense>
          <section className="comments">
            <h2>Comments</h2>
            <Suspense fallback={<Spinner />}>
              <Comments />
            </Suspense>
          </section>
          <h2>Thanks for reading!</h2>
        </article>
      </Suspense>
    </Layout>
  );
}

function Error({ error }: { error: Error }) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.stack}</pre>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Content />
    </Suspense>
  );
};

export default Home;
