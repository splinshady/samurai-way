import React from 'react';
import style from "../../users/User.module.css";
import {UsersPropsType} from "../../users/Users";

export const Paginator: React.FC<UsersPropsType> = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = [];
  for (let i = 1; i <= 5; i++) {
    if (i < 5) {
      pages.push(i)
    } else {
      pages.push(pageCount)
    }
  }
  return (
    <div>
      {pages.map(page => {
        return <span key={page}
                     className={props.currentPage === page ? style.currentPage : ''}
                     onClick={() => {props.setCurrentPage(page)}}
        >{` ${page} `}</span>
      })}
    </div>
  );
};