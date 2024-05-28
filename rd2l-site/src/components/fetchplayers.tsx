'use client'
import React, { useState, useEffect } from 'react';

interface Player {
    _id: number;
    name: string;
    // Add other properties as needed
}

const FetchPlayers = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const res = await fetch('/api/players');
                const playersData = await res;
                setFilteredPlayers(await playersData.json());
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };
    
        fetchPlayers();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
    
        setFilteredPlayers(prevFilteredPlayers =>
            prevFilteredPlayers.filter(player =>
                player.name.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-10 gap-2">
            <div className='flex flex-col items-center gap-2 min-w-[600px] min-h-[200px]'>
                <form>
                    <input
                        placeholder="Search Player Name"
                        className="bg-black rounded-[5px] p-2 m-2 text-center text-white shadow-lg shadow-[#9b3839] hover:border-2 hover:border-[#9b3839]"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </form>
                <div>
                    {filteredPlayers.map(player => (
                        <div key={player._id}>
                            <div>{player.name}</div>
                            {/* Render other player information here */}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default FetchPlayers;