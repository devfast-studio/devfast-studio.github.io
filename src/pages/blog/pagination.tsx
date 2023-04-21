import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
}

function Pagination(props: PaginationProps) {
  const { currentPage = 1, totalPages = 1 } = props;

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="flex justify-center gap-5 mt-8">
      <Link
        className={hasPreviousPage ? '' : 'opacity-0 pointer-events-none'}
        href={`/blog/pages/${currentPage - 1}`}
      >
        {'<<'}
      </Link>

      <h4>
        Page {currentPage} of {totalPages}
      </h4>

      <Link
        className={hasNextPage ? '' : 'opacity-0 pointer-events-none'}
        href={`/blog/pages/${currentPage + 1}`}
      >
        {'>>'}
      </Link>
    </div>
  );
}

export default Pagination;
