import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import Hero from './hero';
import FeaturedPosts from './featurePosts';
import getStaticPropsForHome from 'lib/getStaticProps/home';
import type { FeaturedPost } from 'types/data/post';

export default function Home(props: { featuredPosts: FeaturedPost[] }) {
  const { featuredPosts } = props;

  return (
    <Layout title="MyBrand | Example" description="Hello world description">
      <div className="relative w-full bg-primary">
        <Hero />
        <FeaturedPosts posts={featuredPosts} />
      </div>
    </Layout>
  );
}
