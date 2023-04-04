import {REPOS_PER_PAGE} from './repos.constants';

export const getRepoName = (fullName) => fullName.split('/')[1];

export const getReposRequestParams = (search, page) => ({
    params: {
        q: search?.length ? search : 'react',
        page,
        per_page: REPOS_PER_PAGE,
    },
});
