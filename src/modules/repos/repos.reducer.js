import {SET_IS_REPOS_LOADING, SET_REPOS_DATA} from './repos.constants';

const initialState = {
    isLoading: true,
    data: {
        repos: undefined,
        pagination: {
            page: 1,
            perPage: 20,
            totalCount: 0,
        },
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
        case SET_REPOS_DATA:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
};
