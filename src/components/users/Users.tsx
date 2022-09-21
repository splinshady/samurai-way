import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import style from "./User.module.css";
import axios from "axios";
import defaultPhoto from '../../assets/icons/incubator.png'

class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= 5; i++) {
            if (i < 5) {
                pages.push(i)
            } else {
                pages.push(pageCount)
            }
        }

        return <div>
            <div>
                {pages.map(page => {
                    return <span key={page}
                                 className={this.props.currentPage === page ? style.currentPage : ''}
                                 onClick={() => {this.setCurrentPage(page)}}
                    >{` ${page} `}</span>
                })}
            </div>
            {this.props.users.map(user => {
                return <div key={user.id}>
                    <img src={user.photos.small ? user.photos.small : defaultPhoto}
                         alt="user's avatar"
                         className={style.user_avatar}/>
                    {user.followed
                        ? <button onClick={() => {
                            this.props.unfollow(user.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(user.id)
                        }}>follow</button>
                    }
                    <h3>{user.name}</h3>
                    <span>{user.status}</span>
                </div>
            })}
        </div>
    }
};

export default Users;