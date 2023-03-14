import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';

function Home(): NextPage {
  return (
    <Layout title="MyBrand | Example" description="Hello world description">
      <div>Hello World</div>
    </Layout>
  );
}

export default Home;
