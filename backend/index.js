import express from 'express';
import 'dotenv/config'
import supabase from './supabaseClient.js'

const app = express();

//Set the port that you want the server to run on
const PORT = process.env.PORT || 8080;

// Supabase connection
const connectSupabase = async () => {
  try {
    const { data } = await supabase
      .from('flashcards')
      .select('*')

    console.log('Connected to Supabase!!')
    console.log('Data in flashcards db: ', data)
  } catch (error) {
    console.log('ERROR!! SUpabase not connected!', error)
  }
}

connectSupabase();

//creates an endpoint for the route /api
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from ExpressJS' });
});

app.get('/flashcards', async (req, res) => {
  try {
    const { data } = await supabase
      .from('flashcards')
      .select('*')

    res.json(data);
  } catch (error) {
    res.json({ error: error.message });

  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});