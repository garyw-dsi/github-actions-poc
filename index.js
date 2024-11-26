const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from GitHub Actions POC! Testing 1' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});