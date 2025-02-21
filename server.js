const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const bfhlRoutes = require('./routes/bfhlRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express(); 
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS before defining routes
app.use(cors({
    origin: "http://localhost:3001", // Allow frontend
    methods: ["GET", "POST", "OPTIONS"], // Allow methods
    allowedHeaders: ["Content-Type"], // Allow JSON
}));
app.options("*", cors()); // Allow preflight requests

app.use(bodyParser.json());

// ✅ Define Routes After CORS Middleware
app.use('/bfhl', bfhlRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
