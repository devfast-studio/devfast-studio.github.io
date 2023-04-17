import React from 'react';
import PostsGrid from 'components/postsGrid';
import type { FeaturedPost } from 'types/data/post';

interface FeaturedPostsProps {
  posts: FeaturedPost[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
