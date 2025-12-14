// server/index.js

import express from 'express';
import cors from 'cors'
import { pool } from "./db/pool.js";

const app = express();
app.use(cors());
app.use(express.json());

//Set the port that you want the server to run on
const PORT = process.env.PORT || 8080;

//creates an endpoint for the route /api
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from ExpressJS' });
});

// Get flashcards
app.get('/api/cards', async(req, res) =>{
  try{
    const result = await pool.query('SELECT * FROM flashcards ORDER BY id ASC');
    res.json(result.rows);
  } catch (error) {
    console.warn(error);
    res.status(500).json({ error });
  }
})

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});