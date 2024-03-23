const router = require('express').Router();
const users = require('./users');
const themes = require('./themes');
const posts = require('./posts');
const test = require('./test');
const location = require('./location')
const winner = require('./winners')
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/themes', themes);
router.use('/posts', posts);
router.use('/test', test);
router.use('/location', location);
router.use('/winners', winner),


module.exports = router;
