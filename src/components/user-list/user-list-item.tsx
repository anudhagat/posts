import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { User } from '../../models/users/types';

interface Props {
  user: User;
}

function UserListItem({ user }: Props) {
  return (
    <li className="userListItem">
      <Link
        to={{
          pathname: `/user/${user.id}`,
          state: {
            user,
          },
        }}
      >
        <span className="userName">{user.username}</span>
        <span className="name">{user.name}</span>
      </Link>
    </li>
  );
}
export default UserListItem;
