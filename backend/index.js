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
    origin: ["http://localhost:5173", "http://127.0.0.1:5500","https://station-guide.vercel.app/"],
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
import trainRoutes from "./routes/trainRoutes.js";
import contactUs from "./routes/contactUsRouter.js";
import complaintRoutes from "./routes/complaintRoutes.js";

app.use("/auth", authRoutes);
app.use("/api", authRoutes);
app.use("/api", complaintRoutes);
app.use("/station", stationRoutes);
app.use("/train", trainRoutes);
app.use("/contact", contactUs);


app.get("/", (req, res) => {
  res.send("Working...");
});



const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5500" , "https://station-guide.vercel.app/"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

if (process.env.NODE_ENV !== 'production') {

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { io };
