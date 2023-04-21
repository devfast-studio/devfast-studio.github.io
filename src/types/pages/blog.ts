interface PostType {
  slug?: string;
  title?: string;
  date?: string;
  tags?: string[];
}

interface BlogProps {
  postList?: PostType[];
  currentPage?: number;
  totalPages?: number;
}

export type { PostType, BlogProps };
