import React from "react";
import "./Pagination.scss";

export const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="Pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="Pagination-item">
            <span
              onClick={() => paginate(number)}
              className="Pagination-link"
              style={
                number !== currentPage ? { borderColor: "transparent" } : {}
              }
              // below code for hiding pagination if less than 3 items on list
              // however does not work without page reset when changing tabs
              // style={{
              //   ...(number !== currentPage
              //     ? { borderColor: "transparent" }
              //     : {}),
              //   ...(totalItems <= 3 ? { display: "none" } : {}),
              // }}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
