import Layout from 'components/layout';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import Pagination from './pagination';
import type { BlogProps } from 'types/pages/blog';

export default function Blog(props: BlogProps) {
  const { postList, currentPage, totalPages } = props;

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {postList.map((post) => (
          <PostItem key={uuid()} {...post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Layout>
  );
}

function PostItem(props: {
  title: string;
  date: string;
  tags: string[];
  slug: string;
}) {
  const { title, date, tags, slug } = props;

  return (
    <div className="bg-white p-5 shadow-lg rounded-md">
      <Link
        className="text-2xl font-bold text-gray-700 hover:text-orange-500"
        href={`/blog/${slug}`}
      >
        {title}
      </Link>
      <p className="text-sm text-gray-500 mt-2">{date}</p>
      <ul className="flex flex-wrap mt-3">
        {tags.map((tag) => (
          <li
            key={uuid()}
            className="text-gray-600 border border-gray-300 px-2 py-1 rounded-md mr-2 mb-2"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
