import React from "react";
import { useSearchContext } from "context";

const Searchbar = () => {

    const { search, setSearch } = useSearchContext();

    return (
        <div className="group-input">
            <input
                className="searchbar"
                placeholder="Enter Artist name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default Searchbar;
