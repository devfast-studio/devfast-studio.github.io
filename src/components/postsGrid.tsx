import React from 'react';
import Link from 'next/link';
import type { Post } from 'types/data/post';

interface PostsGridProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <div className="flex flex-wrap md:overflow-x-auto md:flex-nowrap md:space-x-8 py-8 md:pb-8 px-4">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-md p-6 w-full md:w-auto mb-8 md:mb-0 shadow-md">
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>Read More</Link>
    </div>
  );
}
