import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import style from "./User.module.css";
import {v1} from "uuid";
import {UserType} from "../../state/users-reducer";

const initialUsers: UserType[] = [
    {
        id: v1(),
        photoUrl: 'https://freesvg.org/img/elder.png',
        followed: true,
        firstName: 'Kirill',
        lastName: 'B',
        status: 'robot',
        location: {city: 'Minsk', country: 'Belarus'}
    },
    {
        id: v1(),
        photoUrl: 'https://freesvg.org/img/elder.png',
        followed: false,
        firstName: 'Tatyana',
        lastName: 'Ch',
        status: 'women',
        location: {city: 'Minsk', country: 'Belarus'}
    },
]


function Users(props: UsersPropsType) {

    if (props.users.length === 0) props.setUsers(initialUsers)

    const users = props.users.map(user => {
        return <div key={user.id}>
            <img src={user.photoUrl} alt="user's avatar" className={style.user_avatar}/>
            {user.followed
                ? <button onClick={() => {
                    props.unfollow(user.id)
                }}>unfollow</button>
                : <button onClick={() => {
                    props.follow(user.id)
                }}>follow</button>
            }
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <span>{user.status}</span>
            <div>
                <p>country: {user.location.country}</p>
                <p>city: {user.location.city}</p>
            </div>
        </div>
    })

    return (
        <div>
            {users}
        </div>
    );
};

export default Users;