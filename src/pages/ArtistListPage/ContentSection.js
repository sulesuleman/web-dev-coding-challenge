import React from "react";
import { isEmpty } from "lodash";
import { Card, Modal } from "components";
import { UseFetchArtists } from "hooks";
import { AnimatePresence } from "framer-motion";

const ContentSection = () => {
    const {
        singer,
        search,
        popup,
        popupRef,
        gotoArtistDetailPage,
        togglePopup,
    } = UseFetchArtists();


    return (
        <section className="content-container">
            {
                isEmpty(singer) ?
                    <p className="status">0 Results found for "{search}" </p>
                    :
                    <>
                        <p className="status">1 Result found for "{search}" </p>
                        {
                            !isEmpty(singer) && (
                                <span onClick={togglePopup}>
                                    <Card
                                        picture={singer?.image_url}
                                        name={singer?.name}
                                        page_url={singer?.facebook_page_url}
                                    />
                                </span>
                            )}
                    </>
            }
            <AnimatePresence>
                {popup && (
                    <Modal popupRef={popupRef} {...singer} gotoArtistDetailPage={gotoArtistDetailPage} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default ContentSection;
