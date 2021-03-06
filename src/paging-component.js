import { updatePageQuery } from './hash-query.js';

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

let currentPageNumber = 1;
              
function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = updatePageQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});

export default function updatePaging(pagingInfo) {
    currentPageNumber = pagingInfo.page;
    currentPage.textContent = currentPageNumber;
    totalPages.textContent = pagingInfo.totalPages;
    previousButton.disabled = currentPageNumber === 1;
    nextButton.disabled = currentPageNumber === pagingInfo.totalPages;
}