import { writeSearchToQuery } from './hash-query.js';

const searchForm = document.getElementById('search-form');

const searchTermInput = searchForm.querySelector('input');

document.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchTermInput.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});

export default function updateSearchTerm(searchTerm) {
    searchTermInput.value = searchTerm;
}
