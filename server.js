const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const bfhlRoutes = require('./routes/bfhlRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express(); 
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS for both localhost and deployed frontend
const allowedOrigins = [
    "http://localhost:3001", // Local frontend
    "https://bajajfrontend-xi.vercel.app/" // Replace with your Vercel frontend URL
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS not allowed"));
        }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));

// ✅ Allow preflight requests
app.options("*", cors());

app.use(bodyParser.json());

// ✅ Define Routes After CORS Middleware
app.use('/bfhl', bfhlRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
