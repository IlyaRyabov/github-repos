import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Pagination} from 'ui/pagination/Pagination';
import * as selectors from '../repos.selectors';
import {setReposPagination} from '../repos.actions';

export function ReposPagination() {
    const dispatch = useDispatch();

    const pagination = useSelector(selectors.getReposPagination);

    const handlePageChange = useCallback((page) => {
        dispatch(setReposPagination(page));
    }, [dispatch]);

    return (
        <Pagination
            perPage={pagination.perPage}
            onPageChange={handlePageChange}
            totalCount={pagination.totalCount}
            currentPage={pagination.page}
        />
    );
}
