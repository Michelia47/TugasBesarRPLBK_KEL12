import { Fragment } from "react";
import CardSmall3 from "../../components/CardSmall3";
import React from "react";

const QuotesList = ({dramas}) => {

    return (
    <>
        <p id="movies3">DETAIL QUOTES DRAMA</p>
        {dramas.map((drama, index) => (
            <Fragment key={drama.id}>
                <CardSmall3
                   judul={drama.judul}
                   img={drama.img}
                   quotes={drama.quotes}
                />
                {drama.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>  
        ))}
    </>
    );
}

export default QuotesList