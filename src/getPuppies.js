import React, {useState} from "react";

const ListPuppies = (props) => {
return(
    props.players.map(puppy => {
        return (<div className="single-player-card">
            <h2>{puppy.name}</h2>
            <img src={`${puppy.imageUrl}`}></img>
            <p>{puppy.breed}</p>
            <p>{puppy.status}</p>
            <button className="detail-button">See Details</button>
        </div>
        );
    })
)
}

export default ListPuppies;