import React, {useState} from "react";

const ListPuppies = (props) => {
return(
    props.players.map(puppy => {
        return (<div className="single-player-card">
            <h2>{puppy.name}</h2>
            <p className="italics">{puppy.breed}</p>
            <img src={`${puppy.imageUrl}`}></img>
            <button onClick={() => props.showSinglePuppy(puppy.id)} className="detail-button">{puppy.id}</button>
        </div>
        );
    })
)
}

export default ListPuppies;