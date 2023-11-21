import { Fragment } from "react";
import CardSmall3 from "../../components/CardSmall3";
import React from "react";

const SoundtrackList = ({dramas}) => {

    return (
    <>
        <p id="movies3">DETAIL BEST SOUNDTRACK DRAMA</p>
        {dramas.map((drama, index) => (
            <Fragment key={drama.id}>
                <CardSmall3 
                   judul={drama.judul}
                   img={drama.img}
                   sound={drama.sound}
                />
                {drama.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>  
        ))}
    </>
    );
}

export default SoundtrackList