'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'retell-webhook' });
});

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('[webhook] received:', JSON.stringify(req.body, null, 2));
  res.json({ received: true });
});

app.listen(PORT, () => {
  console.log(`retell-webhook listening on port ${PORT}`);
});
