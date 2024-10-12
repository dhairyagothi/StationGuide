import express from "express";
import cors from "cors";
import connectDB from "./config/dbConnection.js";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5500"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

import authRoutes from "./routes/authRoutes.js";
import stationRoutes from "./routes/stationRoutes.js";

app.use("/auth", authRoutes);
app.use("/api", authRoutes);
app.use("/station", stationRoutes);


app.get("/", (req, res) => {
  res.send("Working...");
});



const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5500"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  socket.on("error", (err) => {
    console.error("Socket error:", err);
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { io };
