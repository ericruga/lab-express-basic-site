// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Home Route
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// About Route
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// Work Route
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

// Gallery Route
// app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
