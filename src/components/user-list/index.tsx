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
      <table className="userList">
        <tr className="headerField">
          <th>Username</th>
          <th>Name</th>
        </tr>
        {users.map((user: User) => (
          <UserListItem user={user} />
        ))}
      </table>
    </div>
  );
}
export default UserList;
