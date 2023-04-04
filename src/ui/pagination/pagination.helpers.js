export const getPageNumbers = (
    totalItems,
    itemsPerPage,
) => {
    const newPageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        newPageNumbers.push(i);
    }

    return newPageNumbers;
};

export const getVisiblePages = (
    currentPage,
    pageNumbers,
) => {
    const newVisiblePages = [];

    if (pageNumbers.length > 10) {
        if (currentPage <= 6) {
            newVisiblePages.push(...pageNumbers.slice(0, 7), '...', ...pageNumbers.slice(-1));
        } else if (currentPage >= pageNumbers.length - 5) {
            newVisiblePages.push(...pageNumbers.slice(0, 1), '...', ...pageNumbers.slice(-7));
        } else {
            newVisiblePages.push(...pageNumbers.slice(0, 1), '...', ...pageNumbers.slice(currentPage - 4, currentPage + 3), '...', ...pageNumbers.slice(-1));
        }
    } else {
        newVisiblePages.push(...pageNumbers);
    }

    return newVisiblePages;
};
