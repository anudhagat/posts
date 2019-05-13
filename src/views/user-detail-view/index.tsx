import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../models/reducers';
import { fetchUserByIdAction } from '../../models/users/users-actions';
import { User } from '../../models/users/types';
import './styles.css';

interface OwnProps {
  match: {
    params: {
      userId: string;
    };
  };
}

interface StateProps {
  user: User;
  userId: number;
  loading: boolean;
  error: string;
}

interface DispatchProps {
  fetchUserById: (id: number) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

export class UserDetailView extends Component<Props> {
  componentDidMount() {
    const { fetchUserById, user, userId } = this.props;

    // if the user is not loaded in the redux store, fetch it
    if (user && !user.id) {
      fetchUserById(userId);
    }
  }

  render() {
    const { user } = this.props;
    const username = (user && user.username) || '';
    const name = (user && user.name) || '';
    const email = (user && user.email) || '';
    const website = (user && user.website) || '';
    const { company } = user;

    const companyName = (company && company.name) || '';
    const bs = (company && company.bs) || '';
    const catchPhrase = (company && company.catchPhrase) || '';

    return (
      <div className="userDetail">
        <div className="userDetailName">{name}</div>
        <div className="userDetailUserName">Username: {username}</div>

        <div className="email">
          Email: <a href={`mailto:${email}`}>{email}</a>{' '}
        </div>
        <div className="website">Website: {website}</div>
        <div className="company">
          <span className="companyHeader">Company:</span>
          <span className="companyName">{companyName}</span>
          <span className="companyDetail">{catchPhrase}</span>
          <span className="companyDetail">{bs}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  const user = state.users.users[userId] || {};
  return {
    loading: state.users.loading,
    userId,
    user,
  };
};

const mapDispatchToProps = {
  fetchUserById: fetchUserByIdAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetailView);
