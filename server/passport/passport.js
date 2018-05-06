const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const GitHubStrategy = require('passport-github').Strategy;
const knex = require('../database/mysql');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    done(null, id);
    // knex('users').where({
    //     id
    // }).then((res) => {
    //     done(null, res[0]);
    // });
});

passport.use(
    new GoogleStrategy({
        callbackURL: "/auth/google/redirect",
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLECLIENTSECRET
    }, (accessToken, refreshToken, profile, done) => {
        knex('users').where({
            googleId: profile.id
        }).then((res) => {
            if (res.length < 1) {
                const user = {
                    githubId: null,
                    googleId: profile.id,
                    username: profile.displayName
                };
                return knex('users').insert(user).then((id) => {
                    user.id = id[0]
                    done(null, user);
                });
            }
            done(null, res[0])
        });
    })
);

passport.use(
    new GitHubStrategy({
        callbackURL: '/auth/github/redirect',
        clientID: process.env.GITHUBCLIENTID,
        clientSecret: process.env.GITHUBSECRETID
    }, (accessToken, refreshToken, profile, done) => {
        knex('users').where({
            githubId: profile.id
        }).then((res) => {
            if (res.length < 1) {
                const user = {
                    googleId: null,
                    githubId: profile.id,
                    username: profile.username
                };
                return knex('users').insert(user).then((id) => {
                    user.id = id[0];
                    done(null, user);
                });
            }
            done(null, res[0])
        });
    })
);
