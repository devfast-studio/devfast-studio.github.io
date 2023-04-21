import { getSortedPostsData } from 'lib/api/tina';

export async function getStaticPropsForBlog(context: {
  params?: { page?: string };
}) {
  const allPostsData = await getSortedPostsData();

  const page = parseInt(context.params?.page ?? '1');

  const postsPerPage = 6;

  const totalPages = Math.ceil(allPostsData.length / postsPerPage);

  const postList = allPostsData.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return {
    props: {
      postList,
      currentPage: page,
      totalPages
    }
  };
}

export async function getStaticPathsForBlogPages() {
  const allPostsData = await getSortedPostsData();

  const postsPerPage = 6;

  const totalPages = Math.ceil(allPostsData.length / postsPerPage);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() }
  }));

  return {
    paths,
    fallback: false
  };
}
