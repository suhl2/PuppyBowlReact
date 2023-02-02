import React from "react";

const NewPlayerForm = () => {
    return (
        <div id="new-player-form">
            <form>
                <label>Name:</label>
                <input name="newPuppyName"></input>
                <label>Breed:</label>
                <input name="newBreed"></input>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default NewPlayerForm;