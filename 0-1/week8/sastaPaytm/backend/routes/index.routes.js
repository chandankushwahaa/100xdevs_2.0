const express = require('express');
const router = express.Router();
const userRouter = require('./user.routes');
const accountRouter = require('./account.routes');

router.use('/user', userRouter);
router.use('/account', accountRouter);


module.exports = router;