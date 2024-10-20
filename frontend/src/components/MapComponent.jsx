import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
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
  // Set default location to India (New Delhi)
  const [position, setPosition] = useState([28.6139, 77.2090]); // New Delhi coordinates
  const [locationAvailable, setLocationAvailable] = useState(false); // Track if location is found

  // Custom component to handle flying to the user's location
  const FlyToLocation = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      if (locationAvailable) {
        map.flyTo(position, 13); // Fly to the user's current location with zoom level 13
      }
    }, [position, locationAvailable, map]);
    return null;
  };

  useEffect(() => {
    // Check if the Geolocation API is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]); // Update to user's location
          setLocationAvailable(true); // Set locationAvailable to true
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

      {/* Fly to the user's location when it's available */}
      <FlyToLocation position={position} />

      {/* Marker for current location */}
      {locationAvailable && (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {/* Message if the location is unavailable */}
      {!locationAvailable && (
        <Marker position={position}>
          <Popup>Location not available, showing default location (New Delhi).</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
