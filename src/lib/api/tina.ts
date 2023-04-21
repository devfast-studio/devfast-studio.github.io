import { client } from '../../../tina/__generated__/client';
import type { FeaturedPost } from 'types/data/post';

export async function getSortedPostsData() {
  const { data } = await client.queries.postConnection({
    sort: 'date'
  });

  return (
    data.postConnection.edges
      ?.map((edge) => {
        return {
          slug: edge?.node?._sys?.filename ?? '',
          title: edge?.node?.title ?? '',
          date: edge?.node?.date ?? '',
          tags: edge?.node?.tags ?? []
        };
      })
      .reverse() ?? []
  );
}

export async function getPost(slug: string) {
  const { data } = await client.queries.post({
    relativePath: slug + '.md'
  });

  return data.post;
}

export async function getFeaturedPosts(): Promise<FeaturedPost[]> {
  const { data } = await client.queries.postConnection({
    last: 3,
    sort: 'date'
  });

  return (
    data.postConnection.edges?.map((edge) => {
      return {
        slug: edge?.node?._sys.filename ?? '',
        title: edge?.node?.title ?? '',
        date: edge?.node?.date ?? '',
        body: edge?.node?.body ?? ''
      };
    }) ?? []
  );
}
