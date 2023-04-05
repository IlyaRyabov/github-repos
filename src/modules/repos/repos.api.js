import {mainApi} from 'api/instance';
import {REPOS} from 'constants/endpoints';
import {getReposRequestParams} from './repos.helpers';

export function fetchRepos(search, page) {
    return mainApi.get(REPOS, getReposRequestParams(search, page));
}
