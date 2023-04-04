import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Wrapper} from 'ui/layout/Wrapper';
import {Loader} from 'ui/loader/Loader';
import {getReposData} from '../repos.actions';
import * as selectors from '../repos.selectors';
import {ReposList} from '../components/ReposList';
import {ReposPagination} from './Pagination';
import {SearchReposInput} from './SearchInput';

export function Repos() {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectors.getIsReposLoading);
    const search = useSelector(selectors.getReposSearch);
    const data = useSelector(selectors.getReposData);
    const {page} = useSelector(selectors.getReposPagination);

    useEffect(() => {
        dispatch(getReposData(page, search));
    }, [dispatch, page, search]);

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <Wrapper>
            <SearchReposInput/>
            <ReposList repos={data}/>
            <ReposPagination/>
        </Wrapper>
    );
}
