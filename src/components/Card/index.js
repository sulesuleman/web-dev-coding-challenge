import React from "react";
import { Image } from "components";

const Card = ({ picture, name, page_url }) => {
    return (
        <div className="card">
            <Image src={picture} alt={name} />
            <div className="content">
                <h1>{name}</h1>
                <p>{page_url}</p>
            </div>
        </div>
    );
};

export default Card;
