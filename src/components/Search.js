import './Search.css'
import React, { useState } from "react";

export default function Search({doSearch}) {
    const [search, setSearch] = useState('')
    function handleSearch(e) {
        e.preventDefault()
        doSearch(search)
    }
    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input name="search" value={search} onInput={(e) => setSearch(e.target.value)} type="search"/>
            <button type="submit" className="btn btn-primary">Search Brewery</button>
        </form>
    )
}