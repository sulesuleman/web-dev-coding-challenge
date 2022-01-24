import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getRequest } from 'services/apiClient';
import { artists } from 'services/consts';

const SearchContext = createContext();

export function AppWrapper({ children }) {
    //if cache is empty store empty state else store cache value//
    const [search, setSearch] = useState(() => {
        let initialSearch = localStorage.getItem('artist')
        if (initialSearch) return initialSearch;
        else return '';
    });
    const [singer, setSinger] = useState({});


    const getArtists = async () => {
        try {
            const { data } = await getRequest(artists(search));
            setSinger(data);
        }
        catch (e) {
            console.log('error in api: ', e);
        };
    }

    const _HandleSearchSubmit = async (e) => {
        //if search field is empty and submitted, dont call Api//
        e.preventDefault();
        if (search) {
            await localStorage.setItem('artist', search);
            getArtists(search);
        }
    };

    useEffect(() => {
        localStorage.setItem('artist', search);
    }, [search])

    //dont compute again and again, if same name is searched again, get it from the cache//
    const data = useMemo(
        () => ({
            search,
            singer,
            setSearch,
            getArtists,
            _HandleSearchSubmit,
        }),
        [search, singer]
    );

    return <SearchContext.Provider value={data}>{children}</SearchContext.Provider>;
}

//hook to fetch state and functions in every component//
export const useSearchContext = () => {
    return useContext(SearchContext);
};
