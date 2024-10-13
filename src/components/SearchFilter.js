
import React, { useState } from 'react';

const SearchFilter = ({ profiles, setFilteredProfiles }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setFilteredProfiles(
      profiles.filter(profile => 
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="search-filter">
      <input 
        type="text" 
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilter;
