import React, {useState, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import {getPageNumbers, getVisiblePages} from './pagination.helpers';

const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const PaginationListItem = styled.li`
  margin: 0;
  padding: 0;
`;

const PaginationLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  font: inherit;
  color: #000;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  border: none;
  border-bottom: 3px solid ${props => (props.active ? '#65B79A' : 'transparent')};
`;

export const Pagination = (props) => {
    const {
        perPage,
        onPageChange,
        totalCount,
        currentPage,
    } = props;

    const [prevPage, setPrevPage] = useState(0);
    const [nextPage, setNextPage] = useState(0);

    const pageNumbers = useMemo(() => (
        getPageNumbers(totalCount, perPage)
    ), [totalCount, perPage]);

    const visiblePages = useMemo(() => (
        getVisiblePages(currentPage, pageNumbers)
    ), [pageNumbers, currentPage]);

    useEffect(() => {
        if (currentPage > 1) {
            setPrevPage(currentPage - 1);
        } else {
            setPrevPage(0);
        }

        if (currentPage < pageNumbers.length) {
            setNextPage(currentPage + 1);
        } else {
            setNextPage(0);
        }
    }, [currentPage, pageNumbers]);

    return (
        <PaginationWrapper>
            <PaginationList>
                {prevPage > 0 && (
                    <PaginationListItem>
                        <PaginationLink
                            onClick={() => onPageChange(prevPage)}
                        >
                            Previous
                        </PaginationLink>
                    </PaginationListItem>
                )}
                {visiblePages.map((number, index) => (
                    <PaginationListItem key={index}>
                        {number === '...' ? (
                            <span>{number}</span>
                        ) : (
                            <PaginationLink
                                disabled={currentPage === number}
                                active={currentPage === number}
                                onClick={() => onPageChange(number)}
                            >
                                {number}
                            </PaginationLink>
                        )}
                    </PaginationListItem>
                ))}
                {nextPage > 0 && (
                    <PaginationListItem>
                        <PaginationLink
                            onClick={() => onPageChange(nextPage)}
                        >
                            Next
                        </PaginationLink>
                    </PaginationListItem>
                )}
            </PaginationList>
        </PaginationWrapper>
    );
}
