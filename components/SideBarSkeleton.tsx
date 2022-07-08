import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from '../styles/sideBar.module.css';
import 'react-loading-skeleton/dist/skeleton.css';
const SidebarSkeleton: FC = () => <Skeleton className={styles.sideBar} />;

export { SidebarSkeleton };
