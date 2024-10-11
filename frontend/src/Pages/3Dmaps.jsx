// Create .env file in the frontend and add
// VITE_GOOGLE_MAPS_API_KEY= Add your google api key
// VITE_MAP_ID= Add your google map id

import { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export default function DMapPage() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [open, setOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 28.6139, lng: 77.209 }); // Default to Delhi, India

  const getCurrentPosition = () => {
    // Get the current location of the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(newPosition);
          setMapCenter(newPosition); // Center the map on the new position
        },
        (error) => {
          console.error("Error getting location: ", error);
          alert(
            "Unable to retrieve your location. Please check your settings."
          );
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleLocateMe = () => {
    getCurrentPosition(); // Fetch the current position when the button is clicked
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100%", position: "relative" }}>
        <button
          onClick={handleLocateMe}
          style={{
            position: "absolute",
            zIndex: 1,
            top: "20px",
            left: "20px",
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
        >
          Locate Me
        </button>
        <div
          style={{
            height: "100%",
            width: "100%",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <GoogleMap
            zoom={7}
            center={mapCenter} // Center the map based on the state
            mapContainerStyle={{ height: "100%", width: "100%" }}
          >
            {currentPosition && (
              <Marker
                position={currentPosition}
                onClick={() => setOpen(true)}
              />
            )}

            {open && currentPosition && (
              <InfoWindow
                position={currentPosition}
                onCloseClick={() => setOpen(false)}
              >
                <div
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <p>I'm here!</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
}
