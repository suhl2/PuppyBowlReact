import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import GetPuppies from './getPuppies';
import Puppies from './puppies';
import NewPlayerForm from './NewPlayerForm';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const TestComponent = () => {
    const [players, setPlayers] = useState(Puppies.players);
    return (
    <>
    <NewPlayerForm />
    <div id='all-players-container'>
        <GetPuppies players={players} />
    </div>
    </> )
}

root.render(<TestComponent />);