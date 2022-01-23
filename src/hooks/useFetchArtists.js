import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "context";
import useOutsideClick from "./useOutsideClick";

const UseFetchArtists = () => {

    const navigate = useNavigate();
    const popupRef = React.createRef();
    const { singer, search } = useSearchContext();

    const [popup, setPopup] = useState(false);


    const gotoArtistDetailPage = async () => {
        setPopup(!popup);
        navigate(`/artists/${search}/events`);
    }
    const togglePopup = async () => {
        setPopup(!popup);
    }

    useOutsideClick(popupRef, () => {
        setPopup(false);
    });


    useEffect(() => {
        setPopup(false);
    }, [search])

    return {
        gotoArtistDetailPage, togglePopup, singer, search, popup, popupRef
    };
};

export default UseFetchArtists;
