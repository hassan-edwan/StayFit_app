import express from 'express';
import sqlite3 from 'sqlite3'; // Use sqlite3
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Add this if you're using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Initialize SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    db.run(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, gym_access TEXT)',
    );
  }
});

// API to save user data
app.post('/api/save', (req, res) => {
  const { name, gymAccess } = req.body;

  if (!name || !gymAccess) {
    return res.status(400).json({ message: 'Name and gym access status are required' });
  }

  db.run(
    'INSERT INTO users (name, gym_access) VALUES (?, ?)',
    [name, gymAccess],
    (err) => {
      if (err) {
        console.error('Error saving data:', err.message);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.json({ message: 'Data saved successfully' });
    }
  );
});

// Route to display database content (Users table)
app.get('/', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      console.error('Error retrieving data:', err.message);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ users: rows }); // Send the rows of users as a JSON response
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
