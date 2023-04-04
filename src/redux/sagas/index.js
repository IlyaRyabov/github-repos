import {all, fork} from 'redux-saga/effects';
import {watchRepos} from 'modules/repos/repos.sagas';

export function* rootSaga() {
    yield all([
        fork(watchRepos),
    ]);
}
