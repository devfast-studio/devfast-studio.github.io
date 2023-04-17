import { client } from '../../../tina/__generated__/client';
import type { FeaturedPost } from 'types/data/post';

export default async function getStaticProps() {
  const postConnect = await client.queries.postConnection({
    last: 3,
    sort: 'date'
  });

  const posts: FeaturedPost[] =
    postConnect.data.postConnection.edges?.map((edge) => {
      return {
        slug: edge?.node?.id ?? '',
        title: edge?.node?.title ?? '',
        date: edge?.node?.date ?? '',
        body: edge?.node?.body ?? ''
      };
    }) ?? [];

  return {
    props: {
      data: posts
    }
  };
}
