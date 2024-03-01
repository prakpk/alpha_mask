const fetch = require("node-fetch");
const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Replace if using a different env file or config
require("dotenv").config();

const app = express();

// Apply security measures
app.use(helmet());
app.use(cors()); // Configure as per your requirements

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Root and completion route to serve the frontend application
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Proxy endpoint to interact with Antei which will then interact with Hyperswitch
const Antei_API_URL = process.env.Antei_API_URL;

app.get("/config", async (req, res) => {
  try {
    // Fetch config from Antei
    const configResponse = await fetch(`${Antei_API_URL}/config`);
    if (!configResponse.ok) throw new Error('Failed to fetch configuration from Antei');

    const configData = await configResponse.json();

    res.json(configData);
  } catch (error) {
    console.error('Error fetching config:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/create-payment-intent", async (req, res) => {
  try {
    // Your server-to-server request to Antei goes here
    // Antei would then be responsible for interacting with Hyperswitch
    const paymentIntentResponse = await fetch(`${Antei_API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any additional headers required by Antei
      },
      body: JSON.stringify(req.body) // Forward the request body to Antei
    });

    if (!paymentIntentResponse.ok) throw new Error('Failed to create payment intent');

    const paymentIntentData = await paymentIntentResponse.json();
    res.json(paymentIntentData);
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Listen to the Port
const PORT = process.env.PORT || 5252;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
