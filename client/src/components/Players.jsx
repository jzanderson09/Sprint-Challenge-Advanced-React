import React from 'react';
import './Players.scss';

const Players = ({ players, darkMode }) => {
    return (
        <div className={`Players ${darkMode}`}>
            {players.map(player => {
                return (
                    <div className='player'>
                        <h3>{player.name}</h3>
                        <h5>{player.country}</h5>
                    </div>
                );
            })}
        </div>
    );
};

export default Players;