import React from "react";
import { useSearchContext } from "context";
import { Icon } from "components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
            <Icon icon={faSearch} className={"icon"} />
        </div>
    );
};

export default Searchbar;
