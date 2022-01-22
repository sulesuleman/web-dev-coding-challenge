import { useSearchContext } from 'context';
import { useEffect, useState } from 'react';
import { getRequest } from 'services/apiClient';
import { events } from 'services/consts';

const UseFetchEvents = () => {

    const { search, singer } = useSearchContext();
    const [artistEvents, setArtistEvents] = useState([]);

    const getEvents = async (search) => {
        try {
            const { data } = await getRequest(events(search));
            setArtistEvents(data);
        }
        catch (e) {
            console.log('error in api: ', e);
        };
    }


    useEffect(() => {
        if (search) {
            getEvents(search)
        }
    }, [search]);


    return { search, singer, artistEvents };
};

export default UseFetchEvents;
