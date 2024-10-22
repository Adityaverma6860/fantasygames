import React, { useState } from 'react';
import axios from 'axios';

function TeamForm({ selectedPlayers, setTeam }) {
    const [teamName, setTeamName] = useState('');

    const handleSubmit = () => {
        const playerIds = selectedPlayers.map(player => player._id);
        axios.post('http://localhost:5000/api/v1/products', { name: teamName, playerIds })
            .then(response => setTeam(response.data))
            .catch(error => console.error('Error creating team:', error));
    };

    return (
        <div>
            <h2>Create Team</h2>
            <input
                type="text"
                value={teamName}
                onChange={e => setTeamName(e.target.value)}
                placeholder="Team Name"
            />
            <button onClick={handleSubmit}>Create Team</button>
        </div>
    );
}

export default TeamForm;
