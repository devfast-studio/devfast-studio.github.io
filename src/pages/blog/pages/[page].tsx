// // pages/blog/[page].tsx
// import { GetStaticProps, GetStaticPaths } from 'next';
// import { ParsedUrlQuery } from 'querystring';
// import {
//   getStaticPropsForBlogPage,
//   getStaticPathsForBlogPages
// } from 'lib/staticPropsAndPaths/blog';

// export { default } from 'components/blog';
// export const getStaticProps: GetStaticProps = async (context) => {
//   return getStaticPropsForBlogPage(context);
// };
// export const getStaticPaths: GetStaticPaths = async () => {
//   return getStaticPathsForBlogPages();
// };

export function hi() {
  console.log(123);
}
