import {combineReducers} from 'redux';
import {repos} from 'modules/repos/repos.reducer';

export const rootReducer = combineReducers({
    repos,
});
