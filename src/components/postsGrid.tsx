import React from 'react';
import Link from 'next/link';
import type { FeaturedPost } from 'types/data/post';
import { v4 as uuid } from 'uuid';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text';

interface PostsGridProps {
  posts: FeaturedPost[];
}

interface FirstParagraph {
  children: {
    text: string;
  }[];
}

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <div className="flex flex-wrap md:overflow-x-auto md:flex-nowrap md:space-x-8 py-8 md:pb-8 px-4">
      {posts.map((post) => (
        <PostCard key={uuid()} post={post} />
      ))}
    </div>
  );
}

function PostCard(props: { post: FeaturedPost }) {
  const {
    post: { body, slug = '', title = '', date = '' }
  } = props;

  return (
    <div className="bg-white rounded-md p-6 w-full md:w-1/3 mb-8 md:mb-0 shadow-md">
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="text-gray-500 text-sm mb-4">
        {new Date(date).toDateString()}
      </p>
      <Excerpt body={body} />
      <Link href={`/blog/${slug}`}>Read More</Link>
    </div>
  );
}

function Excerpt(props: { body?: TinaMarkdownContent }) {
  const { body } = props;

  const firstParagraph: FirstParagraph = (body?.children?.find((child) => {
    return child.type === 'p';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any) ?? {
    children: [
      {
        text: 'Sorry, no content.'
      }
    ]
  };

  const content = firstParagraph.children[0].text;

  if (content.length > 350) {
    return <p className="text-gray-700 mb-4">{content.slice(0, 350)}...</p>;
  }

  return <p className="text-gray-700 mb-4">{content}</p>;
}
