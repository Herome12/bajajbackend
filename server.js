const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const bfhlRoutes = require('./routes/bfhlRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express(); 
const PORT = process.env.PORT || 3000;

// ✅ Allow both localhost and deployed frontend on Vercel
const allowedOrigins = [
    "http://localhost:3001", 
    "https://bajajfrontend-xi.vercel.app" // ✅ Add your frontend's actual Vercel URL
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
    allowedHeaders: ["Content-Type"],
    credentials: true // ✅ Allow credentials if needed
}));

// ✅ Handle preflight requests
app.options("*", cors());

app.use(bodyParser.json());

// ✅ Define Routes After CORS Middleware
app.use('/bfhl', bfhlRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
