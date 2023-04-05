import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchRepos} from './repos.api';

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

export const getRepos = createAsyncThunk(
    'repos/fetchRepos',
    async ({page, search}) => {
        const response = await fetchRepos(search, page);
        return {page, data: response.data};
    }
);

export const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setReposSearch: (state, action) => {
            state.search = action.payload;
        },
        setReposPagination: (state, action) => {
            state.pagination = {
                ...state.pagination,
                page: action.payload,
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRepos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.data.items;
                state.pagination = {
                    ...state.pagination,
                    page: action.payload.page,
                    totalCount: action.payload.data.total_count,
                }
            })
            .addCase(getRepos.rejected, (state, {error}) => {
                alert(error.message);
            });
    },
});

export const {setReposSearch, setReposPagination} = reposSlice.actions;
export const reposReducer = reposSlice.reducer;
