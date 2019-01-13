import { combineReducers } from 'redux';

import modal from './modal';
import users from './users';

const reducers = combineReducers({ modal, users });

export default reducers;
