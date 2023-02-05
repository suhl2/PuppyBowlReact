import React from "react";

const SinglePuppy = (props) => {
    console.log(props.selectPuppy);
    return (
        <div className="single-player-view">
            <div className="header-info">
                <p className="pup-title">{props.selectPuppy.name}</p>
                <p className="pup-number">{props.selectPuppy.number}</p>
            </div>
            <p>Status: {props.selectPuppy.status}</p>
            <p>Breed: {props.selectPuppy.breed}</p>
            <img src={props.selectPuppy.imageUrl}/>
            <button onClick={() => props.setSelectPuppy({})} id="see-all">Back to all players</button>
        </div>
    )
}

export default SinglePuppy;