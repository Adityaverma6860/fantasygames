import React from 'react';

function TeamDisplay({ team }) {
    return (
        <div>
            <h2>Team: {team.name}</h2>
            <ul>
                {team.players.map(player => (
                    <li key={player._id}>
                        {player.name} ({player.position}) - {player.points} points
                    </li>
                ))}
            </ul>
            <p>Total Points: {team.totalPoints}</p>
        </div>
    );
}

export default TeamDisplay;
