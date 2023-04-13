import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import Hero from './hero';

function Home() {
  return (
    <Layout title="MyBrand | Example" description="Hello world description">
      <div className="relative w-full">
        <Hero />
      </div>
    </Layout>
  );
}

export default Home;
