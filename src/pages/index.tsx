import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout';
import Home from 'pages/home';
import getStaticPropsForHome from 'lib/getStaticProps/home';
import type { GetStaticProps } from 'next';

export default function Root(props: { data: any }) {
  const { data } = props;

  return <Home featuredPosts={data} />;
}

export const getStaticProps: GetStaticProps = getStaticPropsForHome;
