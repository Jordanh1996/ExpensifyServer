const express = require('express');
const passport = require('passport');
const authenticate = require('../../middleware/authenticate');
const controller = require('./auth.controller');

const router = express.Router();

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), controller.dashboardRedirect);

router.get('/github', passport.authenticate('github', {
    scope: ['profile']
}));

router.get('/github/redirect', passport.authenticate('github'), controller.dashboardRedirect)

router.get('/logout', authenticate, controller.logOut);

module.exports = router;
