import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import ListPuppies from './getPuppies';
import NewPlayerForm from './NewPlayerForm';
import SinglePuppy from './SinglePuppy';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [selectPuppy, setSelectPuppy] = useState({});
    const showSinglePuppy = async (puppyId) => {
        try {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-AM/players/${puppyId}`);
            const result = await response.json();
            if(result.error) {
                throw result.error;
            }
            setSelectPuppy(result.data.player);
            console.log(selectPuppy);
        } catch (err) {
            console.log(err);
        }
    }
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
    }, []);
    return (
    <>
    <NewPlayerForm />
    <div id='all-players-container'>
        {
           selectPuppy.id ? <SinglePuppy selectPuppy={selectPuppy} setSelectPuppy={setSelectPuppy} /> : <ListPuppies players={players} showSinglePuppy={showSinglePuppy} />
        }
    </div>
    </> )
}

root.render(<Main />);