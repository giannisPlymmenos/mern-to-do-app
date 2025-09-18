const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const sign = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { email, password } = req.body || {};
  if (!email?.trim() || !password?.trim()) return res.status(400).json({ error: 'Missing fields' });

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: 'Email in use' });

  const user = await User.create({ email, password });
  const token = sign(user._id);
  res.json({ token, user: { id: user._id, email: user.email } });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body || {};
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }
  const token = sign(user._id);
  res.json({ token, user: { id: user._id, email: user.email } });
});

module.exports = router;
