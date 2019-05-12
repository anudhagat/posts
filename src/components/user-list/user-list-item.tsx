import React from 'react';
import './styles.css';
import { User } from '../../models/users/types';

interface Props {
  user: User;
}

function UserListItem({ user }: Props) {
  return (
    <tr className="userListItem">
      <td className="userName">{user.username}</td>
      <td className="name">{user.name}</td>
    </tr>
  );
}
export default UserListItem;
