const express = require('express');
const app = express();
const socksRoutes = require('./routes/socks');
const port = process.env.PORT = 3000;

// Middleware
app.use(express.json());
app.use('/api/socks', socksRoutes);

app.get('/api/socks', (req, res) => res.send('Welcome to happy Cake world'));

app.listen(port, () => console.log(`listening on port http://localhost:${port}`));
