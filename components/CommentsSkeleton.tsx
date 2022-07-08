import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from '../styles/comments.module.css';
import 'react-loading-skeleton/dist/skeleton.css';
const CommentsSkeleton: FC = () => (
  <Skeleton borderRadius={'0.5rem'} className={styles.commentsskeleton} />
);

export { CommentsSkeleton };
