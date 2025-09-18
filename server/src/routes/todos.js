const router = require('express').Router();
const auth = require('../middleware/auth');
const Todo = require('../models/Todo');

// All todo routes require auth
router.use(auth);

// GET /api/todos
router.get('/', async (req, res) => {
  const todos = await Todo.find({ user: req.userId }).sort('-createdAt');
  res.json(todos);
});

// POST /api/todos
router.post('/', async (req, res) => {
  const text = req.body?.text?.trim();
  if (!text) return res.status(400).json({ error: 'Text required' });
  const todo = await Todo.create({ text, user: req.userId });
  res.status(201).json(todo);
});

// PUT /api/todos/:id
router.put('/:id', async (req, res) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    { $set: req.body },
    { new: true }
  );
  if (!todo) return res.status(404).json({ error: 'Not found' });
  res.json(todo);
});

// DELETE /api/todos/:id
router.delete('/:id', async (req, res) => {
  const deleted = await Todo.findOneAndDelete({ _id: req.params.id, user: req.userId });
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json({ ok: true });
});

module.exports = router;
