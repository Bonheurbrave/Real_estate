// Import required modules
const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const fs = require('fs');


const app = express();
const port = 4000;


// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'real_estate'
});

connection.connect();

app.use(express.json());
// Middleware to parse JSON bodies

// Define routes

// Create a new real estate
app.post('/realestate', (req, res) => {
  console.log(req.body);
  const { estateName,image , imageName, price, description, location, beds, parkingSpot, furnished, regularPrice, discount, sold, rent, bathrooms } = req.body;
  const sql = 'INSERT INTO real_estate (estateName, image, imageName, price, description, location, beds, parkingSpot, furnished, regularPrice, discount, sold, rent, bathrooms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [estateName, image, imageName, price, description, location, beds, parkingSpot, furnished, regularPrice, discount, sold, rent, bathrooms], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error creating real estate.' });
    } else {
      res.status(201).json({ message: 'Real estate created successfully.' });
    }
  });
});

// Get all real estates
app.get('/realestate', (req, res) => {
  const sql = 'SELECT * FROM real_estate';
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error retrieving real estates.' });
    } else {
      res.json(result);
    }
  });
});

// Get a single real estate by ID
app.get('/realestate/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM real_estate WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error retrieving real estate.' });
    } else if (result.length === 0) {
      res.status(404).json({ error: 'Real estate not found.' });
    } else {
      res.json(result[0]);
    }
  });
});


// Update a real estate by ID
app.put('/realestate/:id', (req, res) => {
  const id = req.params.id;
  const { estateName, price, description, location, beds, parkingSpot, furnished, regularPrice, discount, sold, rent, bathrooms } = req.body;

  const sql = 'UPDATE real_estate SET estateName = ?, price = ?, description = ?, location = ?, beds = ?, parkingSpot = ?, furnished = ?, regularPrice = ?, discount = ?, sold = ?, rent = ?, bathrooms = ? WHERE id = ?';
  connection.query(sql, [estateName, price, description, location, beds, parkingSpot, furnished, regularPrice, discount, sold, rent, bathrooms, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error updating real estate.' });
    } else {
      res.json({ message: 'Real estate updated successfully.' });
    }
  });
});

// Delete a real estate by ID
app.delete('/realestate/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM real_estate WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting real estate.' });
    } else {
      res.json({ message: 'Real estate deleted successfully.' });
    }
  });
});

// Start the server





// inserting an image in the mysql db codes 
// server.js


const upload = multer({ dest: 'uploads/' });

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'real_estate'
});

db.connect();

app.post('/upload', upload.single('image'), (req, res) => {
  const { originalname, buffer } = req.file;
  
  const query = 'INSERT INTO images (name, image) VALUES (?, ?)';
  db.query(query, [originalname, buffer], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Image uploaded successfully');
    }
  });
});


app.get('/images', (req, res) => {
  const sql = 'SELECT * FROM images';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error retrieving real estates.' });
    } else {
      res.json(result);
    }
  });
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
