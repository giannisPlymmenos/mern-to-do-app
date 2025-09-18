require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db');

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/api/health', (_req, res) => res.json({ ok: true }));


app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));

// error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

(async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(process.env.PORT, () => console.log(`🚀 http://localhost:${process.env.PORT}`));
})();
