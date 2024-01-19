import React from "react";
export default function Pagination({ page, items, onPage, pageSize, onChangePageSizeChange }) {
    let pages = Math.ceil(items.length / pageSize);
    let buttons = [];

    buttons.push(
        <li key="first">
            <button onClick={() => onPage(1)} disabled={page === 1}>&lt;&lt;</button>
        </li>
    );

    buttons.push(
        <li key="previous">
            <button onClick={() => onPage(page - 1)} disabled={page === 1}>&lt;</button>
        </li>
    );

    for (const i of get_page_range(page, pages)) {
        buttons.push(
            <li key={i}>
                <button onClick={() => onPage(i)} disabled={i === page}>{i}</button>
            </li>
        );
    }

    buttons.push(
        <li key="next">
            <button onClick={() => onPage(page + 1)} disabled={page === pages}>&gt;</button>
        </li>
    );

    buttons.push(
        <li key="last">
            <button onClick={() => onPage(pages)} disabled={page === pages}>&gt;&gt;</button>
        </li>
    );

    return (
        <>
            <div className="resultCount">
                <p>Results: {items.length}</p>
            </div>
            <div className="pagination">
                <p>Page {page} of {pages}</p>
                <ul>{buttons}</ul>
            </div>
            <div className="perPage">
                <label htmlFor="page_size">Per page:</label>
                <select name="page_size" id="page_size" value={pageSize} onChange={onChangePageSizeChange}>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                </select>
            </div>
        </>
    );
}

function get_page_range(page, pages) {
    const range = 5;
    const start = Math.max(page - (Math.floor(range / 2)), 1);
    const end = Math.min(page + (Math.floor(range / 2)), pages);

    let page_numbers = [];
    for (let i = start; i <= end; i++) {
        page_numbers.push(i);
    }

    return page_numbers;
}