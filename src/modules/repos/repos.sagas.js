import {takeLatest, call, put} from 'redux-saga/effects';
import {mainApi} from 'api/instance';
import {REPOS} from 'constants/endpoints';
import {GET_REPOS_DATA} from './repos.constants';
import {setIsReposLoading, setReposData, setReposPagination} from './repos.actions';
import {getReposRequestParams} from "./repos.helpers";

function* getRepos({page, search}) {
    try {
        const {data} = yield call(
            mainApi.get,
            REPOS,
            getReposRequestParams(search, page),
        );

        yield put(setReposData(data.items));
        yield put(setReposPagination(page, data.total_count));
        yield put(setIsReposLoading(false));
    } catch(e) {
        alert(e.response.data.message);
    }
}

export function* watchRepos() {
    yield takeLatest(GET_REPOS_DATA, getRepos);
}
