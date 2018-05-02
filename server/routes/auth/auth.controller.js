const service = require('./auth.service');

const logOut = (req, res) => {
    req.logOut();
    res.redirect(process.env.CLIENT_URL);
};

const dashboardRedirect = (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
};

module.exports = {
    logOut,
    dashboardRedirect
};
