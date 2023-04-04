import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {setReposPagination, setReposSearch} from '../repos.actions';
import {SearchReposInput as SearchReposInputComponent} from '../components/SearchInput';

export function SearchReposInput() {
    const dispatch = useDispatch();

    const handleSearch = useCallback((e) => {
        dispatch(setReposPagination(1));
        dispatch(setReposSearch(e.target.value));
    }, [dispatch]);

    return (
        <SearchReposInputComponent
            placeholder="Search"
            onChange={handleSearch}
        />
    );
}
