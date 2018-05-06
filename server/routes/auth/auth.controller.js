const service = require('./auth.service');

const logOut = (req, res) => {
    req.logOut();
    res.redirect(process.env.CLIENT_URL);
};

const dashboardRedirect = (req, res) => {
    const redirect = (token) => {
        res.redirect(`${process.env.CLIENT_URL}/token/${token}/`);
    }
    const profile = req.user.googleId ? req.user.googleId : req.user.githubId;
    service.getToken(profile, req.user.id, redirect);
};

module.exports = {
    logOut,
    dashboardRedirect
};
