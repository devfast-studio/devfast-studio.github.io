import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import Hero from './hero';
import FeaturedPosts from './featurePosts';
import type { Post } from 'types/data/post';

const mockPosts: Post[] = [
  {
    slug: 'post-1',
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: '2023-04-10',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tempor elit, ut mollis mi. Curabitur convallis risus ut lacus interdum...'
  },
  {
    slug: 'post-2',
    title: 'Vestibulum Vitae Venenatis Vel',
    date: '2023-03-25',
    excerpt:
      'Vestibulum vitae venenatis vel, vehicula eget odio. Phasellus ac ullamcorper neque. Fusce eu turpis vel elit scelerisque...'
  },
  {
    slug: 'post-3',
    title: 'Fusce Semper Tellus',
    date: '2023-03-10',
    excerpt:
      'Fusce semper tellus et bibendum convallis. Nam non risus facilisis, cursus justo vitae, fermentum dolor. Sed commodo...'
  }
];

function Home() {
  return (
    <Layout title="MyBrand | Example" description="Hello world description">
      <div className="relative w-full bg-primary">
        <Hero />
        <FeaturedPosts posts={mockPosts} />
      </div>
    </Layout>
  );
}

export default Home;
