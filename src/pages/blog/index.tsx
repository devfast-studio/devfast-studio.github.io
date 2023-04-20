import { getStaticPropsForBlog } from 'lib/staticPropsAndPaths/blog';
import Blog from './blog';
import type { BlogProps } from 'types/pages/blog';
import type { GetStaticProps } from 'next';

export default function BlogIndex(props: BlogProps) {
  return <Blog {...props} />;
}

export const getStaticProps: GetStaticProps = getStaticPropsForBlog;
