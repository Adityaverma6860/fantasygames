import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlayerList({ onSelectPlayer }) {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/players')
            .then(response => setPlayers(response.data))
            .catch(error => console.error('Error fetching players:', error));
    }, []);

    return (
        <div>
            <h2>Available Players</h2>
            <ul>
                {players.map(player => (
                    <li key={player._id}>
                        {player.name} ({player.position}) - {player.points} points
                        <button onClick={() => onSelectPlayer(player)}>Add to Team</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;
