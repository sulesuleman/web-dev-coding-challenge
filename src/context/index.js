import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getRequest } from 'services/apiClient';
import { artists } from 'services/consts';

const SearchContext = createContext();

export function AppWrapper({ children }) {
    const [search, setSearch] = useState('');
    const [singer, setSinger] = useState({});


    const getArtists = async (search) => {
        try {
            const { data } = await getRequest(artists(search));
            setSinger(data);
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
        if (cache) {
            setSearch(cache);
            getArtists(cache);
        }
    }, [])

    //dont compute again and again, if same name is searched again, get it from the cache//
    const data = useMemo(
        () => ({
            search,
            singer,
            setSearch,
            _HandleSearchSubmit,
        }),
        [search, singer]
    );

    return <SearchContext.Provider value={data}>{children}</SearchContext.Provider>;
}

export const useSearchContext = () => {
    return useContext(SearchContext);
};
