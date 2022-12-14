import React, {useState} from 'react';
import style from "../../users/User.module.css";

type PaginatorPropsType = {
  totalItemsCount: number
  pageSize: number
  portionSize: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = (props) => {
  let pageCount = Math.ceil(props.totalItemsCount / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
  }

  let portionCount =  Math.ceil(pageCount/props.portionSize)
  let [portionNumber, setPortionNumber] =  useState(1)
  let leftPageNumber =  (portionNumber - 1) * props.portionSize + 1
  let rightPageNumber =  portionNumber  * props.portionSize

  return (
    <div>
      {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>
      }
      {pages
        .filter(page => (page >= leftPageNumber && page <= rightPageNumber))
        .map(page => {
          return <span onClick={() => props.setCurrentPage(page)} key={page}>{page}</span>
        })
      }
      {portionCount > portionNumber &&
        <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
      }
    </div>
  );
};