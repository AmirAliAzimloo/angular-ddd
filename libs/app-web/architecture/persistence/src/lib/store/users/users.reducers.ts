import { createReducer, on } from '@ngrx/store';

import { UserAggregate } from '@angular-ddd/domain';
import * as UsersActions from './users.actions';
import { Identity } from '@angular-ddd/domain-driven-design/common';

export interface State {
  user: UserAggregate | null;
}

const initialState: State = {
  user: null,
};

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.saveUser, (state, action) => {
    const userAggregate = UserAggregate.create({
      id: new Identity(action.userId),
      nationalId: action.nationalId,
      username: action.username,
      firstName: action.firstName,
      lastName: action.lastName,
    });

    return {
      ...state,
      user: userAggregate,
    };
  })
);
