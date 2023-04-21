import Layout from 'components/layout';
import { client } from '../../../tina/__generated__/client';
import Post from 'components/post';
import type { PostData } from 'types/data/post';
import { getStaticPropsForBlogArticle } from 'lib/staticPropsAndPaths/blogArticle';

export default function BlogPage(props: { post: PostData }) {
  const { post } = props;

  return (
    <Layout>
      <Post post={post} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.queries.postConnection();

  const paths =
    data.postConnection?.edges?.map((edge) => {
      return { params: { slug: edge?.node?._sys?.filename } };
    }) ?? [];

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = getStaticPropsForBlogArticle;
