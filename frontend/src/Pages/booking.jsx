import React, { useState } from 'react';
import axios from 'axios';
import './booking.css';

function Booking() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
      const response = await axios.post('http://localhost:3000/api/tickets/search', {
        source,
        destination,
      });
      console.log(response.data); // Log the response data
      setTickets(response.data);
    } catch (err) {
      setError('Error fetching tickets. Please try again.');
    }
  };

  return (
    <div className="ticket-search-container">
      <h2>Search for Tickets</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <br></br>
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {tickets.length > 0 && (
        <div className="tickets-list">
          <h3>Available Tickets:</h3>
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket._id}> {/* Change ticketID to _id */}
                <p>
                  <strong>Travel Type:</strong> {ticket.travelType}
                </p>
                <p>
                  <strong>Departure:</strong> {new Date(ticket.departureTime).toLocaleString()}
                </p>
                <p>
                  <strong>Arrival:</strong> {new Date(ticket.arrivalTime).toLocaleString()}
                </p>
                <p>
                  <strong>Price:</strong> ${ticket.price}
                </p>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Booking;
