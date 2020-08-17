const express = require("express");
const cors = require("cors");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors()).use(express.json())

// Routes
app.use('/api/users', require('./routes/users.route'))
app.use('/api/notes', require('./routes/notes.routes'))

module.exports = app;
