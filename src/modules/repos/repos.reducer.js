import {SET_IS_REPOS_LOADING, SET_REPOS_DATA, SET_REPOS_PAGINATION, SET_REPOS_SEARCH} from './repos.constants';

const initialState = {
    isLoading: true,
    search: '',
    data: undefined,
    pagination: {
        page: 1,
        perPage: 20,
        totalCount: 0,
    },
};

export const repos = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case SET_IS_REPOS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case SET_REPOS_SEARCH:
            return {
                ...state,
                search: action.search,
            };
        case SET_REPOS_DATA:
            return {
                ...state,
                data: action.data,
            };
        case SET_REPOS_PAGINATION:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page,
                    totalCount: action.totalCount || state.pagination.totalCount,
                },
            };
        default:
            return state;
    }
};
