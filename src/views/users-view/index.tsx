import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../models/reducers';
import UserList from '../../components/user-list';
import { fetchUsersAction } from '../../models/users/users-actions';
import { User } from '../../models/users/types';
import './styles.css';

interface StateProps {
  users: User[];
  loading: boolean;
  error: string;
}

interface DispatchProps {
  fetchUsers: () => void;
}

type Props = StateProps & DispatchProps;

export class UsersView extends Component<Props> {
  state = {
    users: this.props.users,
  };

  componentDidMount() {
    const { fetchUsers } = this.props;

    if (fetchUsers) {
      fetchUsers();
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { users } = this.props;
    if (
      prevProps.users.length === 0 &&
      prevProps.users.length !== users.length
    ) {
      this.setState({ users });
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const textToFilter = e.target.value.toLowerCase();
    const { users } = this.props;
    let filteredUsers = [];
    if (textToFilter !== '') {
      filteredUsers = users.filter(user => {
        const userName = user.username.toLowerCase();
        const userFullName = user.name.toLowerCase();
        return (
          userName.includes(textToFilter) || userFullName.includes(textToFilter)
        );
      });
    } else {
      filteredUsers = [...users];
    }
    this.setState({ users: filteredUsers });
  };

  render() {
    const { loading } = this.props;
    const { users } = this.state;
    return (
      <div>
        <input
          type="text"
          list="searchList"
          onChange={this.handleChange}
          placeholder="Search User ..."
          className="searchInput"
        />
        <datalist id="searchList">
          {users.map(user => (
            <option
              key={user.id}
              value={`Name: ${user.name} UserName: ${user.username}`}
            />
          ))}
        </datalist>
        <UserList users={users} loading={loading} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  users: Object.values(state.users.users) || [],
  loading: state.users.loading,
});

const mapDispatchToProps = {
  fetchUsers: fetchUsersAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersView);
