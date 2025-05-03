const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'  
  }));
  

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), authController.googleCallback);

router.get('/logout', authController.logoutUser);

router.get('/current_user', authController.getCurrentUser);

module.exports = router;
