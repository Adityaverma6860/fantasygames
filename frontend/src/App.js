import React, { useState } from 'react';
import PlayerList from './components/PlayerList';
import TeamForm from './components/TeamForm';
import TeamDisplay from './components/TeamDisplay';

function App() {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [team, setTeam] = useState(null);

    const handleSelectPlayer = (player) => {
        if (selectedPlayers.length < 11) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    return (
        <div>
            <h1>Fantasy Game</h1>
            <PlayerList onSelectPlayer={handleSelectPlayer} />
            {selectedPlayers.length > 0 && (
                <>
                    <TeamForm selectedPlayers={selectedPlayers} setTeam={setTeam} />
                    {team && <TeamDisplay team={team} />}
                </>
            )}
        </div>
    );
}

export default App;
