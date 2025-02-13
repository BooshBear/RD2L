'use client'
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

interface Player {
    _id: number;
    name: string;
    // Add other properties as needed
}

export const FetchPlayers = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [players, setPlayers] = useState<Player[]>([]);
    const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const res = await fetch('/api/players');
                const playersData = await res.json();
                setPlayers(playersData);
                setFilteredPlayers(playersData);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };
    
        fetchPlayers();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
    
        if (query === '') {
            return setFilteredPlayers(players);
        } else {
            setFilteredPlayers(players.filter(player => {
                if (player.name) {
                    return player.name.toLowerCase().includes(query.toLowerCase())
                }  
            }
            ));
        }
    };

    return (
        <div className='grid grid-cols-4 justify-items-center gap-2'>
            <form className='col-span-full mb-3'>
                <input
                    placeholder="Search Player Name"
                    className="bg-black rounded-[5px] p-2 text-center text-white shadow-lg shadow-[#9b3839]"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </form>
            <h3 className="col-span-full mb-3 italic">* List of all players who have signed up for RD2L *</h3>
            {filteredPlayers.map(player => (
                <div key={player._id}>
                    <Link href={`/players/${player.name}`}><Button variant="outline" className='rounded-[0.3rem] min-w-[10rem] hover:bg-zinc-200 '>{player.name}</Button></Link>
                    
                    {/* Render other player information here */}
                </div>
            ))}
        </div>
    );
};