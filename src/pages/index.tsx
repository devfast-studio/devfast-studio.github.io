import Home from 'pages/home';
import { getStaticPropsForHome } from 'lib/staticPropsAndPaths/home';
import type { GetStaticProps } from 'next';
import type { FeaturedPost } from 'types/data/post';

export default function Root(props: { featuredPosts: FeaturedPost[] }) {
  const { featuredPosts } = props;

  return <Home featuredPosts={featuredPosts} />;
}

export const getStaticProps: GetStaticProps = getStaticPropsForHome;
