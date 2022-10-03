import React from 'react';
import { Link } from 'react-router-dom';
const Pagination = ({ currentPage, lastPage }: { currentPage: number; lastPage: number }) => {
  const PAGINATION = [
    {
      title: '<<',
      to: `../`,
    },
    {
      title: '<',
      to: `../page/${currentPage - 1}`,
    },
    {
      title: `${currentPage}`,
      to: `../page/${currentPage}`,
    },
    {
      title: `>`,
      to: `../page/${currentPage + 1}`,
    },
    {
      title: `>>`,
      to: `../page/${lastPage}`,
    },
  ];
  return (
    <div className="pagination">
      <ul className="pagination-ul">
        {PAGINATION.map(({ title, to }, index) => (
          <li className="pagination__list-item" key={index}>
            <Link
              key={index}
              to={to}
              style={
                currentPage - 1 < 0 || currentPage + 1 > lastPage
                  ? { pointerEvents: 'none' }
                  : undefined
              }
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
