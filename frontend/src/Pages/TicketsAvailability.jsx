import React, { useState } from 'react';

const TicketSearchComponent = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'source') {
      setSource(value);
    } else {
      setDestination(value);
    }
  };

  // Search for tickets
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!source || !destination) {
      setError('Please enter both source and destination.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const ticketData = await fetchTickets(source, destination);
      setTickets(ticketData);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      setError('There was an error fetching the tickets.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch tickets from the backend
  const fetchTickets = async (source, destination) => {
    try {
      const response = await fetch('http://localhost:3000/api/search-tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ source, destination }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch tickets');
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
      setError('Failed to fetch tickets.');
      return [];
    }
  };

  return (
    <div className="ticket-search max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-semibold text-green-600 mb-6 text-center">Tickets Availability</h2>

      <form onSubmit={handleSearch} className="space-y-6">
        <div>
          <label htmlFor="source" className="block text-lg font-medium text-gray-700">
            Departure (Source)
          </label>
          <input
            type="text"
            id="source"
            name="source"
            value={source}
            onChange={handleInputChange}
            placeholder="Enter departure location"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            required
          />
        </div>

        <div>
          <label htmlFor="destination" className="block text-lg font-medium text-gray-700">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={destination}
            onChange={handleInputChange}
            placeholder="Enter destination location"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-500 transition-colors"
        >
          Search
        </button>
      </form>

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {loading && <p className="mt-4 text-blue-600 text-center">Loading...</p>}

      {/* Displaying search results */}
      {tickets.length > 0 && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Available Tickets</h3>
          <ul className="space-y-4">
            {tickets.map((ticket, index) => (
              <li
                key={index}
                className="p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-xl font-semibold text-gray-800">{ticket.transport}</p>
                <p><strong>Departure:</strong> {ticket.departureTime}</p>
                <p><strong>Arrival:</strong> {ticket.arrivalTime}</p>
                <p><strong>Price:</strong> ${ticket.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tickets.length === 0 && source && destination && !error && !loading && (
        <p className="text-green-600 text-center">No tickets found for this route.</p>
      )}
    </div>
  );
};

export default TicketSearchComponent;
