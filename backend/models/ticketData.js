const mongoose = require('mongoose');
const Ticket = require('./models/Ticket'); // Adjust the path as necessary

mongoose.connect('mongodb://localhost:27017/tickets', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  const tickets = [
    {
      ticketID: 'TICKET001',
      source: 'New York',
      destination: 'Los Angeles',
      travelType: 'Flight',
      departureTime: new Date('2024-10-05T10:00:00Z'),
      arrivalTime: new Date('2024-10-05T13:00:00Z'),
      price: 300,
    },
    {
      ticketID: 'TICKET002',
      source: 'New York',
      destination: 'Chicago',
      travelType: 'Train',
      departureTime: new Date('2024-10-06T08:00:00Z'),
      arrivalTime: new Date('2024-10-06T12:00:00Z'),
      price: 150,
    },
    {
      ticketID: 'TICKET003',
      source: 'Chicago',
      destination: 'Los Angeles',
      travelType: 'Bus',
      departureTime: new Date('2024-10-07T09:00:00Z'),
      arrivalTime: new Date('2024-10-07T20:00:00Z'),
      price: 100,
    },
  ];

  await Ticket.insertMany(tickets);
  console.log('Sample tickets added to the database');
  mongoose.connection.close();
})
.catch(err => console.error(err));
