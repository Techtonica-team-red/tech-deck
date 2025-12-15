# TechDeck: A Smarter Flashcard App

TechDeck is a smarter way to study.

# Description

A flashcard app designed for organizing each card based on difficulty level. 

## How to Run

### Backend
1. Clone Backen
2. Run cd backend command to change to frontend directory
3. Run npm install command to install all dependencies
4. Create .env file and add DATABASE_URL
5. Run npm run dev command
6. Open http://localhost:8080 in browser to see backend 
7. server running

### Frontend
1. Run cd frontend command to change to frontend directory
2. Run npm install command to install all dependencies
3. Create .env file and add VITE_BACKEND_URL
4. Run npx vite command
5. Open http://localhost:5173 in browser to see Vite running

### Database (Supabase)
**NOTE** This project is using Supabase to host a PostgreSQL database
1. [Create Supabase account](https://supabase.com/dashboard/sign-up?returnTo=%2Fproject%2Fwkwpkakpsyoumcxhfvef%2Feditor%2F17499) (login if you have one)
2. [Create new organization](https://supabase.com/dashboard/new)
3. Navigate to your Organization project name
4. Navigate to table editor and create a new table using the query below (table name is flashcards):
   ```
   CREATE TABLE flashcards (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(50), -- e.g., 'React', 'Node', 'CSS'
    difficulty VARCHAR(20) DEFAULT 'medium' -- 'easy', 'medium', 'hard'
    );
   ```
Here is some dummy data to populate the ```flashcards``` table
  ```
  INSERT INTO flashcards (question, answer, category, difficulty)
  VALUES 
    ('What is a component?', 'Independent and reusable bits of code.', 'React', 'easy'),
    ('What function runs after the server starts?', 'app.listen()', 'Node', 'easy');
```
5. Connect to your database from the backend by adding your Supabase key to the DATABASE_URL in .env file.
Link should look like something like this: 
  ```DATABASE_URL='postgresql://postgres.hhahdjladshflkhdjkahsdkhjk:[YOUR-PASSWORD]@aws-0-us-northwest-5.pooler.supabase.com:543233/postgres'```
6. Edit URL link to add database password
7. Test connection by adding a new flashcard.

## Contributions

Siyi
- frontend
- backend

Dari
- frontend
- backend
- database

Adrian
- frontend
- backend
