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

// Create new flashcards
app.post('/api/cards', async(req, res) => {
  try {
    const { question, answer, category, difficulty } = req.body;

    const result = await pool.query(
      `INSERT INTO flashcards (question, answer, category, difficulty)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [question, answer, category, difficulty]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log("ERROR! SOmething went wrong!", error)
    res.status(500).json({ error: error.message });
  }
})

app.put('/api/cards/:id', async(req, res) => {
  try {
    const { id } = req.params
    const { question, answer, category, difficulty } = req.body;
    const data = await pool.query(
      `UPDATE flashcards SET  question = $1, answer = $2, category = $3, difficulty = $4
      WHERE id = $5
      RETURNING *`,
      [question, answer, category, difficulty, id]
    );
    } catch(error) {
    console.log(error)
    res.status(500).json({ error: error.message });

    }
})
// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});