import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import { generateToken } from '../middleware/authMiddleware.js';

// POST /api/users/login
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id, user.isAdmin),
    });
  }
  res.status(401);
  throw new Error('Invalid email or password');
});

// POST /api/users
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({ name, email, password });
  return res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id, user.isAdmin),
  });
});

// GET /api/users/profile
export const getUserProfile = asyncHandler(async (req, res) => {
  return res.json(req.user);
});

// GET /api/users (admin)
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-password');
  res.json(users);
});

// PUT /api/users/:id (admin)
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  user.name = req.body.name ?? user.name;
  user.email = req.body.email ?? user.email;
  if (typeof req.body.isAdmin === 'boolean') {
    user.isAdmin = req.body.isAdmin;
  }
  const updated = await user.save();
  res.json({ _id: updated._id, name: updated.name, email: updated.email, isAdmin: updated.isAdmin });
});

// DELETE /api/users/:id (admin)
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  await user.deleteOne();
  res.json({ message: 'User removed' });
});


