import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api'; // Import LoadScript
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent'; 
import SearchFilter from './components/SearchFilter';
import './App.css'; // Importing CSS file

const App = () => {
  const [profiles] = useState([
    {
      id: 1,
      name: 'Krrish',
      description: 'Software Engineer from Jammu.',
      photo: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Krrish',
      address: { lat: 32.7266, lng: 74.8570 }, // Jammu
      summary: 'Passionate about technology and software development.'
    },
    {
      id: 2,
      name: 'Krishna',
      description: 'Data Scientist based in Mumbai.',
      photo: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Krishna',
      address: { lat: 19.0760, lng: 72.8777 }, // Mumbai
      summary: 'Loves analyzing data to gain insights and improve processes.'
    },
    {
      id: 3,
      name: 'Pratik',
      description: 'Web Developer from Chennai.',
      photo: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Pratik',
      address: { lat: 13.0827, lng: 80.2707 }, // Chennai
      summary: 'Enjoys creating beautiful and responsive websites.'
    },
    {
      id: 4,
      name: 'Parth',
      description: 'DevOps Engineer from Kolkata.',
      photo: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Parth',
      address: { lat: 22.5726, lng: 88.3639 }, // Kolkata
      summary: 'Expert in CI/CD and cloud technologies.'
    },
    {
      id: 5,
      name: 'Adhiraj',
      description: 'UI/UX Designer from Pune.',
      photo: 'https://via.placeholder.com/150/FFC300/FFFFFF?text=Adhiraj',
      address: { lat: 18.5204, lng: 73.8567 }, // Pune
      summary: 'Focused on creating user-friendly and engaging designs.'
    },
    {
      id: 6,
      name: 'Mrunal',
      description: 'Product Manager from Bengaluru.',
      photo: 'https://via.placeholder.com/150/C70039/FFFFFF?text=Mrunal',
      address: { lat: 12.9716, lng: 77.5946 }, // Bengaluru
      summary: 'Passionate about bringing great products to life.'
    }
  ]);

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleProfileSelect = (profile) => {
    console.log("Selected Profile:", profile);
    setSelectedProfile(profile);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCSPOs4w4Z0ZIJtZHNpWOTuTD6_HqiU6qs"> {/* Replace with your actual API key */}
      <div className="app">
        <h1>Main Profile Page</h1>
        <SearchFilter profiles={profiles} setFilteredProfiles={setFilteredProfiles} />
        <ProfileList profiles={filteredProfiles} onProfileSelect={handleProfileSelect} />
        {selectedProfile && selectedProfile.address ? (
          <MapComponent selectedProfile={selectedProfile} />
        ) : null}
      </div>
    </LoadScript>
  );
};

export default App;
