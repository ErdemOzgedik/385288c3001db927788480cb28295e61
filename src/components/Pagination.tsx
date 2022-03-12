import React, { useEffect } from "react";
import "../styles/components/Pagination/pagination.css";

interface Props {
  count: number;
  current: number;
  handleClick(index: number): void;
}
const Pagination = ({ count, current, handleClick }: Props) => {
  useEffect(() => {
    console.log("bos effect pagination render edildi");
  });
  return (
    <div className="pagination">
      <div className="pagination__list">
        {Array.from(Array(count), (e, i) => {
          return (
            <div
              className={
                "pagination__list--item" + (current === i ? " active" : "")
              }
              key={i}
              onClick={() => handleClick(i)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
