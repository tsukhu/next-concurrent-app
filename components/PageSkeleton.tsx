import React, { FC } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { CommentsSkeleton } from './CommentsSkeleton';
import { PostSkeleton } from './PostSkeleton';
import { SidebarSkeleton } from './SideBarSkeleton';
const PageSkeleton: FC = () => (
  <>
    <aside className="sidebar">
      <SidebarSkeleton />
    </aside>
    <article className="post">
      <PostSkeleton />
      <section className="comments">
        <h2>Comments</h2>
        <CommentsSkeleton />
      </section>
      <h2>Thanks for reading!</h2>
    </article>
  </>
);

export { PageSkeleton };
