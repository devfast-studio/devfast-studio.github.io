import { GetStaticProps, GetStaticPaths } from 'next';
import Blog from '../blog';
import {
  getStaticPropsForBlog,
  getStaticPathsForBlogPages
} from 'lib/staticPropsAndPaths/blog';
import type { BlogProps } from 'types/pages/blog';

function BlogPage(props: BlogProps) {
  return <Blog {...props} />;
}

export default BlogPage;

export const getStaticProps: GetStaticProps = async (context) => {
  return getStaticPropsForBlog(context);
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getStaticPathsForBlogPages();
};
