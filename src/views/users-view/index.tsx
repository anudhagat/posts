import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../models/reducers';
import UserList from '../../components/user-list';
import { fetchUsersAction } from '../../models/users/users-actions';
import { User } from '../../models/users/types';

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
  componentDidMount() {
    const { fetchUsers } = this.props;
    if (fetchUsers) {
      fetchUsers();
    }
  }
  render() {
    const { users, loading } = this.props;
    return <UserList users={users} loading={loading} />;
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
