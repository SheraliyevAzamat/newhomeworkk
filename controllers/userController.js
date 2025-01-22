const User = require('../models/userModel');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (!user) return res.status(404).json({ message: 'Invalid credentials' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};
exports.updateUser = async (req, res) => {
  const { name, email } = req.body;
  await User.update({ name, email }, { where: { id: req.params.userId } });
  const updatedUser = await User.findByPk(req.params.userId);
  res.json(updatedUser);
};
exports.deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.userId } });
  res.json({ message: 'User deleted' });
};