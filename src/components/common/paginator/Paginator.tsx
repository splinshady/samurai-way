import React from 'react'

import { Button } from '../Button/Button'

import style from './Paginator.module.css'

type PaginatorPropsType = {
  totalItemsCount: number
  pageSize: number
  portionSize: number
  currentPage: number
  portionNumber: number
  setCurrentPage: (page: number) => void
  setPortionNumber: (portionNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = props => {
  let pageCount = Math.ceil(props.totalItemsCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pageCount / props.portionSize)
  let leftPageNumber = (props.portionNumber - 1) * props.portionSize + 1
  let rightPageNumber = props.portionNumber * props.portionSize

  const selectPage = (page: number) => {
    props.setCurrentPage(page)
  }

  return (
    <div className={style.paginator_container}>
      {props.portionNumber > 1 && (
        <Button onClick={() => props.setPortionNumber(props.portionNumber - 1)}>prev</Button>
      )}
      {pages
        .filter(page => page >= leftPageNumber && page <= rightPageNumber)
        .map(page => {
          return (
            <span
              className={`${page === props.currentPage && style.current_page} ${style.page_number}`}
              onClick={() => selectPage(page)}
              key={page}
            >
              {page}
            </span>
          )
        })}
      {portionCount > props.portionNumber && (
        <Button onClick={() => props.setPortionNumber(props.portionNumber + 1)}>next</Button>
      )}
    </div>
  )
}
