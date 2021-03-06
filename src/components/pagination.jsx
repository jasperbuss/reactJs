import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Paging = props => {
  const { totalItems, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(totalItems / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Paging.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Paging;
