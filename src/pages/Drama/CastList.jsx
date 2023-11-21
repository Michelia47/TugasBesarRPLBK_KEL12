import { Fragment } from "react";
import CardSmall4 from "../../components/CardSmall4";
import React from "react";

const CastList = ({dramas}) => {

    return (
    <>
        <p id="movies4">DETAIL CAST DRAMA</p>
        {dramas.map((drama, index) => (
            <Fragment key={drama.id}>
                <CardSmall4
                   judul={drama.judul}
                   img={drama.img}
                   cast={drama.cast}
                />
                {drama.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>  
        ))}
    </>
    );
}

export default CastList