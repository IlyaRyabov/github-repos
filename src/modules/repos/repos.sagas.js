import {takeLatest, call, put} from 'redux-saga/effects';
import {mainApi} from 'api/instance';
import {REPOS} from 'constants/endpoints';
import {GET_REPOS_DATA, REPOS_PER_PAGE} from './repos.constants';
import {setIsReposLoading, setReposData} from './repos.actions';
import {getReposRequestParams} from "./repos.helpers";

function* getRepos({page, search}) {
    try {
        const {data} = yield call(
            mainApi.get,
            REPOS,
            getReposRequestParams(search, page),
        );

        yield put(setReposData({
            repos: data.items,
            pagination: {
                page,
                perPage: REPOS_PER_PAGE,
                totalCount: data.total_count,
            },
        }));

        yield put(setIsReposLoading(false));
    } catch(e) {
        alert(e.response.data.message);
    }
}

export function* watchRepos() {
    yield takeLatest(GET_REPOS_DATA, getRepos);
}
