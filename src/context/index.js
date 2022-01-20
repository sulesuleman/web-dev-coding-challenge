import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getRequest } from 'services/apiClient';
import { artists } from 'services/consts';

const SearchContext = createContext();

export function AppWrapper({ children }) {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [singers, setSingers] = useState([]);


    const getArtists = async (search) => {
        try {
            const singers = await getRequest(artists(search));
            setSingers(singers);
        }
        catch (e) {
            console.log('error in api: ', e);
        };
    }

    const _HandleSearchSubmit = async () => {
        //if search field is empty and submitted, show nothing//
        if (search) {
            await localStorage.setItem('artist', search);
            getArtists(search);
        }
    };

    useEffect(() => {
        // if already search Artist Name, list them//
        const cache = localStorage.getItem('artist');
        console.log(cache);
        if (cache) {
            setSearch(cache);
            getArtists(cache);
        }
    }, [])

    //dont compute again and again, if same name is searched again, get it from the cache//
    const data = useMemo(() => ({
        search, loading, singers, setSearch, _HandleSearchSubmit, setLoading
    }), [search, loading, singers, setSearch, setLoading]);

    return <SearchContext.Provider value={data}>{children}</SearchContext.Provider>;
}

export const useSearchContext = () => {
    return useContext(SearchContext);
};
