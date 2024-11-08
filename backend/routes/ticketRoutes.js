import availableTickets from "../dataset/tickets.js";
import express from "express";
const router = express.Router();


router.get('/get-all-tickets', function(req, res) {
  res.json(availableTickets);
});


router.post('/search-tickets', (req, res) => {
  const { source, destination } = req.body;

  // Validate input
  if (!source || !destination) {
    return res.status(400).json({ error: 'Both source and destination must be provided.' });
  }

  // Filter tickets based on source and destination
  const filteredTickets = availableTickets.filter(
    (ticket) =>
      ticket.source.toLowerCase() === source.toLowerCase() &&
      ticket.destination.toLowerCase() === destination.toLowerCase()
  );

  if (filteredTickets.length === 0) {
    return res.status(404).json({ message: 'No tickets found for this route.' });
  }

  res.json(filteredTickets);
});

export default router;
