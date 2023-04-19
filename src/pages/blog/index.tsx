import Layout from 'components/layout';
import { getStaticPropsForBlog } from 'lib/staticPropsAndPaths/blog';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

export default function Blog(props: {
  postList: {
    slug: string;
    title: string;
    date: string;
    tags: string[];
  }[];
}) {
  const { postList } = props;

  return (
    <Layout>
      <h1 className="text-4xl font-bold p-10">Posts</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-10">
        {postList.map((post) => (
          <div key={uuid()} className="p-5 shadow-lg">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <p>{post.date}</p>
            <ul>
              {post.tags.map((tag) => (
                <li key={uuid()}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = getStaticPropsForBlog;
