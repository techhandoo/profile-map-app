import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = ({ selectedProfile }) => {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: selectedProfile.address.lat,
    lng: selectedProfile.address.lng
  };

  const mapRef = useRef(null); // Reference to the Google Map
  const markerRef = useRef(null); // Reference to the marker

  useEffect(() => {
    if (mapRef.current && window.google) {
      // Clean up the previous marker if it exists
      if (markerRef.current) {
        markerRef.current.setMap(null); // Remove the previous marker from the map
      }
      // Create a new marker for the new profile
      markerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
        position: center,
        map: mapRef.current,
        title: selectedProfile.name,
      });
    }
  }, [center, selectedProfile.name]); // Runs when center or selectedProfile.name changes

  return (
    <LoadScript googleMapsApiKey="AIzaSyCSPOs4w4Z0ZIJtZHNpWOTuTD6_HqiU6qs">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={(map) => {
          mapRef.current = map; // Set map reference
        }}
      />
    </LoadScript>
  );
};

export default MapComponent;
