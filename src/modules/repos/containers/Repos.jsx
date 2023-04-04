import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Wrapper} from 'ui/layout/Wrapper';
import {Pagination} from 'ui/pagination/Pagination';
import {Loader} from 'ui/loader/Loader';
import {getReposData} from '../repos.actions';
import * as selectors from '../repos.selectors';
import {ReposList} from '../components/ReposList';
import {SearchReposInput} from '../components/SearchInput';

export function Repos() {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectors.getIsReposLoading);
    const reposData = useSelector(selectors.getReposData);

    useEffect(() => {
        dispatch(getReposData(1));
    }, [dispatch]);

    const handlePageChange = useCallback((page) => {
        dispatch(getReposData(page));
    }, [dispatch]);

    const handleSearch = useCallback((e) => {
        dispatch(getReposData(1, e.target.value));
    }, [dispatch]);

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <Wrapper>
            <SearchReposInput
                placeholder="Search"
                onChange={handleSearch}
            />
            <ReposList
                repos={reposData.repos}
            />
            <Pagination
                totalCount={reposData.pagination.totalCount}
                perPage={reposData.pagination.perPage}
                onPageChange={handlePageChange}
                currentPage={reposData.pagination.page}
            />
        </Wrapper>
    );
}
