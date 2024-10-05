import express from 'express';
import cors from 'cors';
import connectDB from './config/dbConnection.js';
import cookieParser from 'cookie-parser';

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
})); // Enable CORS

app.use(cookieParser()); // Parse cookies
app.use(express.json()); // Parse incoming request bodies in a middleware before your handlers
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB
connectDB();

// Routes
import authRoutes from './routes/authRoutes.js';
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Working...');
});
const Ticket = mongoose.model('Ticket', ticketSchema);

// Routes
app.post('/api/tickets/search', async (req, res) => {
  const { source, destination } = req.body;

  if (!source || !destination) {
    return res.status(400).json({ message: 'Source and destination are required.' });
  }

  try {
    const tickets = await Ticket.find({
      source: { $regex: source, $options: 'i' },
      destination: { $regex: destination, $options: 'i' },
    });
    res.json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});