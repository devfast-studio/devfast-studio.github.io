import React from 'react';
import PostsGrid from 'components/postsGrid';
import type { Post } from 'types/data/post';

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) {
    return <p>No featured posts available.</p>;
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
