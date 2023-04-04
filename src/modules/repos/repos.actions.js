import {
    GET_REPOS_DATA,
    SET_IS_REPOS_LOADING,
    SET_REPOS_DATA,
    SET_REPOS_PAGINATION,
    SET_REPOS_SEARCH,
} from './repos.constants';

export const setIsReposLoading = (isLoading) => ({
    type: SET_IS_REPOS_LOADING,
    isLoading,
});

export const setReposSearch = (search) => ({
    type: SET_REPOS_SEARCH,
    search,
});

export const getReposData = (page, search) => ({
    type: GET_REPOS_DATA,
    page,
    search,
});

export const setReposData = (data) => ({
    type: SET_REPOS_DATA,
    data,
});

export const setReposPagination = (page, totalCount) => ({
    type: SET_REPOS_PAGINATION,
    page,
    totalCount,
});
