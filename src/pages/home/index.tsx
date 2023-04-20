import Layout from 'components/layout';
import Hero from './hero';
import FeaturedPosts from './featurePosts';
import type { FeaturedPost } from 'types/data/post';

export default function Home(props: { featuredPosts: FeaturedPost[] }) {
  const { featuredPosts } = props;

  return (
    <Layout title="MyBrand | Example" description="Hello world description">
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Layout>
  );
}
