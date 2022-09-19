import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import style from "./User.module.css";
import axios from "axios";
import defaultPhoto from '../../assets/icons/incubator.png'

class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return <div>
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