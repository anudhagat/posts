import React from 'react';
import UserListItem from './user-list-item';
import { User } from '../../models/users/types';
import './styles.css';

type Props = {
  users: User[];
  loading: boolean;
};

function UserList({ users }: Props) {
  return (
    <div className="userListContainer">
      <div className="headerField">
        <span className="userName">Username</span>
        <span className="name">Name</span>
      </div>

      <ul className="userList">
        {users.map((user: User) => (
          <UserListItem user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}
export default UserList;
