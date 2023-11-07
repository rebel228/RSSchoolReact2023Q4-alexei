import React from 'react';
import { Button } from '../entities/Button';
import { usePage, useSearchContext } from '../shared/hooks';

export const Pagination = () => {
  const [page, setPage] = usePage();
  const {
    apiRequestStatus,
    apiRequestParams: { limit },
  } = useSearchContext();
  const total =
    apiRequestStatus && typeof apiRequestStatus === 'object'
      ? apiRequestStatus.total
      : 0;
  const pages = Math.ceil(total / limit);

  return (
    <div className="flex gap-2 items-center">
      <Button disabled={page === 1} onClick={() => setPage((n) => n - 1)}>
        &lt;
      </Button>
      {page > 2 && <Button onClick={() => setPage(1)}>1</Button>}
      {page > 3 && <span>...</span>}
      {page > 1 && (
        <Button onClick={() => setPage(page - 1)}>{page - 1}</Button>
      )}
      <span className="font-bold">{page}</span>
      {page < pages && (
        <Button onClick={() => setPage(page + 1)}>{page + 1}</Button>
      )}
      {page < pages - 2 && <span>...</span>}
      {page < pages - 1 && (
        <Button onClick={() => setPage(pages)}>{pages}</Button>
      )}
      <Button disabled={page === pages} onClick={() => setPage((n) => n + 1)}>
        &gt;
      </Button>
    </div>
  );
};
