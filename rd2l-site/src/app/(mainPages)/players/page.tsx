'use client'
import React, { useState } from 'react';

interface Player {
    id: number;
    name: string;
    // Add other properties as needed
}

const Players = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [playersData, setPlayersData] = useState<Player[]>([]);  // You would need to fetch and set your player data here
    const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);  // State for filtered player data

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Filter player data based on searchQuery and update the filteredPlayers state
        const filteredPlayers = playersData.filter(player =>
            player.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPlayers(filteredPlayers);
    };
    
    return (
        <main className="flex min-h-screen flex-col items-center p-10 gap-2">
            <div>
                {/* Search bar */}
                <form>
                    <input
                        placeholder="Search PlayerName"
                        className="bg-black rounded-[5px] p-2 text-center text-white shadow-lg shadow-[#9b3839] hover:border-2 hover:border-[#9b3839]"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </form>
                {/* Display filtered player data */}
                <div>
                    {filteredPlayers.map(player => (
                        <div key={player.id}>
                            {/* Render player card here */}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Players;
