import { getPost } from 'lib/api/tina';

export async function getStaticPropsForBlogArticle(ctx: {
  params: { slug: string };
}) {
  const {
    params: { slug }
  } = ctx;

  const post = await getPost(slug);

  return {
    props: {
      post
    }
  };
}
