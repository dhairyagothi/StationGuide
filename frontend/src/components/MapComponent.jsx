import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default icon issue in Leaflet with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const MapComponent = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)
  const [locationAvailable, setLocationAvailable] = useState(false); // To track if location is found

  useEffect(() => {
    // Check if the Geolocation API is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]); // Set user's location
          setLocationAvailable(true); // Update to true if location is found
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      {/* TileLayer to load the map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker for current location */}
      {locationAvailable && (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {/* Display a message if location is not available */}
      {!locationAvailable && (
        <Popup position={position}>Location not available, showing default location.</Popup>
      )}
    </MapContainer>
  );
};

export default MapComponent;
