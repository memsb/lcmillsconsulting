import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Pagination from './Pagination.js';
import SelectGuide from './SelectGuide.js';

import { useNavigate } from 'react-router-dom';


function getResultsPage(items, page, per_page) {
    let start = (page - 1) * per_page;
    let end = page * per_page;
    return items.slice(start, end);
}

function InputFilter({ name, text, onChange }) {
    return (
        <input id={name} onChange={onChange} value={text} placeholder="Search..." />
    );
}

function OptionFilter({ id, value = '', values, onFilterChange }) {
    const options = values.map((option) => {
        return <option value={option} key={option}>{option}</option>
    });

    return (
        <select key={id} id={id} value={value} onChange={onFilterChange}>
            <option value="" key="none"></option>
            {options}
        </select>
    );
}

function Table({ items, years, page, pageSize, filters, onFilterChange }) {
    const years_headers = Object.keys(years).map((year) => {
        return <th key={year}>{year}</th>;
    });

    const years_filters = Object.keys(years).map((year) => {
        return (
            <th key={year} className="year">
                <OptionFilter key={year} id={year} value={filters?.[year] || ''} values={years[year]} onFilterChange={onFilterChange} />
            </th>
        );
    });

    const rows = getResultsPage(items, page, pageSize).map((item, index) => {
        return <Row key={index} item={item} />;
    });

    return (
        <table>
            <thead>
                <tr key="headings">
                    <th key="Name">Name</th>
                    <th key="Firm">Firm</th>
                    <th key="Location">Location</th>
                    <th key="Practice">Practice</th>
                    {years_headers}
                </tr>
                <tr key="filters">
                    <th key="name"><InputFilter name="name" text={filters?.name || ''} onChange={onFilterChange} /></th>
                    <th key="firm"><InputFilter name="firm" text={filters?.firm || ''} onChange={onFilterChange} /></th>
                    <th key="location"><InputFilter name="location" text={filters?.location || ''} onChange={onFilterChange} /></th>
                    <th key="practice"><InputFilter name="practice" text={filters?.practice || ''} onChange={onFilterChange} /></th>
                    {years_filters}
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function Row({ item }) {
    const history = Object.keys(item.history).map((year) => {
        return <td key={year} className="year">{item.history[year]}</td>;
    });

    return (
        <tr key={item.id}>
            <td key={item.name}>{item.name}</td>
            <td key={item.firm}>{item.firm}</td>
            <td key={item.location}>{item.location}</td>
            <td key={item.practice}>{item.practice}</td>
            {history}
        </tr>
    );
}

export default function Lawyers() {
    const [guides, setGuides] = useState([]);
    const [guide, setGuide] = useState({});
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(100);
    const [allItems, setAllItems] = useState([]);
    const [years, setYears] = useState([]);
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState({});
    const navigate = useNavigate();
    const { guideName } = useParams();

    function handlePage(newPage) {
        setPage(newPage);
    }

    function handleChangePageSize(event) {
        const newPageSize = event.target.value;
        setPageSize(newPageSize);

        const lastPage = Math.ceil(items.length / newPageSize);
        if (page > lastPage) {
            setPage(lastPage);
        }
    }

    function guideSelected(newGuide) {
        setGuide(newGuide);
        navigate(`/lawyers/${newGuide.name}`);
        axios.get(`/lawyers/${newGuide.id}.json`).then((res) => {
            setAllItems(res.data.lawyers);
            setItems(res.data.lawyers);
            setYears(res.data.years);
        });
    }

    function handleFilterChange(event) {
        const filterId = event.target.id;
        const filterValue = event.target.value;
        let newFilters = Object.assign({}, filters);
        if (!filterValue) {
            // removing unspecified filters gives fewer comparisons to make, improving performance
            delete newFilters[filterId];
        } else {
            newFilters[filterId] = filterValue;
        }

        setFilters(newFilters);

        let matchingItems = allItems;

        for (const [key, value] of Object.entries(newFilters)) {
            if (parseInt(key)) {
                matchingItems = matchingItems.filter((item) => {
                    return item.history[key].toUpperCase().indexOf(value.toUpperCase()) !== -1;
                })
            } else {
                matchingItems = matchingItems.filter((item) => {
                    return item[key].toUpperCase().indexOf(value.toUpperCase()) !== -1;
                })
            }
        }

        setItems(matchingItems);
        // New search, return to first page of results
        setPage(1);
    }

    function findGuideByName(guideList, guideName = 'USA') {
        return guideList.find((element) => element.name.toUpperCase() === guideName.toUpperCase());
    }

    useEffect(() => {
        axios.get("/guides.json").then((res) => {
            setGuides(res.data.guides);

            let found = findGuideByName(res.data.guides, guideName);
            guideSelected(found);
        });
    }, []);

    return (
        <div id="directory">
            <nav>
                <Link to="/guides" role="button">Home</Link>
                <Link to={`/firms/${guide.name}`} role="button">Firms</Link>
                <Link to={`/lawyers/${guide.name}`} role="button">Lawyers</Link>
            </nav>
            <h1>{guide.name} Lawyers</h1>
            <SelectGuide guides={guides} value={guide} guideSelected={guideSelected} />
            <div className="navigation">
                <Pagination page={page} pageSize={pageSize} items={items} onPage={handlePage} onChangePageSizeChange={handleChangePageSize} />
            </div>
            <div className="table">
                <Table items={items} years={years} page={page} pageSize={pageSize} filters={filters} onFilterChange={handleFilterChange} />
            </div>
            <div className="navigation">
                <Pagination page={page} pageSize={pageSize} items={items} onPage={handlePage} onChangePageSizeChange={handleChangePageSize} />
            </div>
        </div>
    );
}
