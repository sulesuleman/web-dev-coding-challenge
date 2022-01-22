import { useNavigate } from "react-router-dom";
import { useSearchContext } from "context";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const UseFetchArtists = () => {

    const { singer, search } = useSearchContext();
    const navigate = useNavigate();
    const [popup, setPopup] = useState(false);

    const gotoArtistDetailPage = async () => {
        setPopup(!popup);
        navigate(`/artists/${search}/events`);
    }
    const togglePopup = async () => {
        setPopup(!popup);
    }

    useEffect(() => {
        setPopup(false);
    }, [search])

    return {
        gotoArtistDetailPage, togglePopup, singer, search, popup
    };
};

export default UseFetchArtists;
