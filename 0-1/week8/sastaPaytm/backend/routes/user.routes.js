const express = require('express');
const router = express.Router();
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { User } = require('../db');
const {JWT_SECRET} = require('../config');
const {authMiddleware} = require('../middleware');

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});

// Sign Up
router.post('/signup', async (req, res) => {
    const body = req.body;
    const {sucess} = signupSchema.safeParse(req.body);
    if(!sucess) {
        return res.status(400).json({message: "Invalid input"});
    }
    const user = User.findOne({
      username: body.username
    })
    if(user._id){
      return res.status(400).json({message: "Username already exists"});
    }

    const dbUser = await User.create(body);
    const token = jwt.sign({
      userId: dbUser._id,
    }, JWT_SECRET)

    res.json({
      message: "User created",
      token: token,
      // data: dbUser
    })
});


// Sign In
const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post('/signin', async (req, res) => {
  const {sucess} = signinSchema.safeParse(req.body);
  if(!sucess) {
    return res.status(400).json({message: "Invalid input"});
  }
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  });

  if(user){
    const token = jwt.sign({
      userId: user._id,
    }, JWT_SECRET)
    res.json({
      token: token,
    })
    return;
  }
  res.status(411).json({message: "Error signing in"});
});

// Update User
const updateUserSchema = zod.object({
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
  password: zod.string().optional(),
})

router.put('/', authMiddleware, async (req, res) => {
  const {sucess} = updateUserSchema.safeParse(req.body);
  if(!sucess) {
    return res.status(400).json({message: "Error updating user"});
  }

  await User.updateOne({
    _id: req.userId
  }, req.body);

  res.json({
    message: "User updated",
  })
});

// Get
router.get('/bulk', async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {firstname: {$regex: filter}},
      {lastname: {$regex: filter}},
    ]
  })
  res.json({
    user: users.map(user => ({
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      _id: user._id,
    }))
  })
});


module.exports = router;