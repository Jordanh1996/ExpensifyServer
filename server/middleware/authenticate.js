
const authenticate = (req, res, next) => {
    if (!req.user) {
        res.redirect('http://localhost:3000/auth/google');
    } else {
        next();
    }
};

module.exports = authenticate;
