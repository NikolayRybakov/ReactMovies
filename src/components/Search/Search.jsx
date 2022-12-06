import { useState } from "react";

const Search = ({searchMovies}) => {

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (e) => {
        if (e.key === "Enter") {
           searchMovies(search, type);
        }
    }

    const handleFilter = (e) => {
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type);
    }

    return (
        <div className="row">
            <div className="col s12">
                <input
                    id="email_inline"
                    placeholder="search"
                    type="search"
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
            </div>
            <button className="btn search-btn" onClick={() => searchMovies(search, type)}>Search</button>
            <div>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="all" onChange={handleFilter} checked={type === "all"} />
                    <span>All</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="movie" onChange={handleFilter} checked={type === "movie"} />
                    <span>Movies</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="series" onChange={handleFilter} checked={type === "series"} />
                    <span>Series</span>
                </label>
            </div>
        </div>
    )
}

export default Search;