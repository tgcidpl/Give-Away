import React, { useState } from "react";
import organisations from "../organisations.json";
import collections from "../collections.json";
import "./TabPrint.scss";
import { Paginate } from "./Paginate";

export const TabPrint = ({ tab }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  let title = `Foundation`;
  if (tab === organisations) title = `Organisation`;
  if (tab === collections) title = "Collection";

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tab.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <ul className="TabPrint">
        {currentItems.map((item) => (
          <li key={item.id} className="TabPrint-item">
            <div className="TabPrint-item-info">
              <h3>
                {title} "{item.name}"
              </h3>
              <p>Aim and goals: {item.goals}</p>
            </div>
            <div className="TabPrint-item-items">{item.items}</div>
          </li>
        ))}
      </ul>
      <Paginate itemsPerPage={itemsPerPage} totalItems={tab.length} />
    </div>
  );
};
