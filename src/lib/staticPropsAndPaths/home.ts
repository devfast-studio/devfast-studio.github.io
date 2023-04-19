import { getFeaturedPosts } from 'lib/api/tina';

export async function getStaticPropsForHome() {
  const featuredPosts = await getFeaturedPosts();

  return {
    props: {
      featuredPosts
    }
  };
}
