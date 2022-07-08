import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const PostSkeleton: FC = () => (
  <Skeleton height={170} width={1000} borderRadius={'0.5rem'} />
);

export { PostSkeleton };
