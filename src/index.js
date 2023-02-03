import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import ListPuppies from './getPuppies';
import NewPlayerForm from './NewPlayerForm';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const TestComponent = () => {
    const [players, setPlayers] = useState([]);
    const GetPuppies = async () => {
        try { 
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-AM/players`);
            const result = await response.json();
            if(result.error) {
                throw result.error;
            }
            setPlayers(result.data.players);
            return result.data.players;
        } catch (err){
            console.log(err);
        }
    };
    useEffect(() => {
        GetPuppies();
    });
    return (
    <>
    <NewPlayerForm />
    <div id='all-players-container'>
        <ListPuppies players={players} />
    </div>
    </> )
}

root.render(<TestComponent />);