import React, { useState } from 'react';
import SearchBar from './SearchBar';

export default function App (){
  const [filteredSongs, setFilteredSongs] = useState([]);
  
 function handleSearch(searchSong) {
   
    const allSongs = ['Song A', 'Song B', 'Song C', 'Song D'];
    const filteredSongs = allSongs.filter(song =>
      song.toLowerCase().includes(searchSong.toLowerCase())
    );
    setFilteredSongs(filteredSongs);
  };

  return (
    <div>
      <h1>Favorite Songs</h1>
      <SearchBar onSearch={handleSearch} />
      
      <h2>Filtered Songs:</h2>
      <ul>
        {filteredSongs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

