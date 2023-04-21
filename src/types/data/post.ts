import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';

interface FeaturedPost {
  slug: string;
  title: string;
  date: string;
  body: TinaMarkdownContent;
}

interface PostData {
  title: string;
  date: string;
  body: TinaMarkdownContent;
}

export type { FeaturedPost, PostData };
