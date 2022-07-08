import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CommentsSkeleton } from '../components/CommentsSkeleton';
import { PostSkeleton } from '../components/PostSkeleton';
import { SidebarSkeleton } from '../components/SideBarSkeleton';
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
    <Suspense fallback={<SidebarSkeleton />}>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <article className="post">
        <Suspense fallback={<PostSkeleton />}>
          <Post />
        </Suspense>
        <section className="comments">
          <h2>Comments</h2>
          <ErrorBoundary FallbackComponent={CommentsError}>
            <Suspense fallback={<CommentsSkeleton />}>
              <Comments />
            </Suspense>
          </ErrorBoundary>
        </section>
        <h2>Thanks for reading!</h2>
      </article>
    </Suspense>
  );
}

function CommentsError() {
  return <div>Comments are currently unavailable</div>;
}

const Home: NextPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Content />
    </Suspense>
  );
};

export default Home;
