import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import Hero from './hero';

function Home() {
  return (
    <Layout title="MyBrand | Example" description="Hello world description">
      <div classname="relative w-full">
        <Hero />
        <div>Hello World</div>
      </div>
    </Layout>
  );
}

export default Home;
