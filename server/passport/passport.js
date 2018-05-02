const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const knex = require('../database/mysql');

passport.serializeUser((user, done) => {
    done(null, user[0].id);
});

passport.deserializeUser((id, done) => {
    knex('users').where({
        id
    }).then((res) => {
        done(null, res[0]);
    });
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
                return knex('users').insert({
                    googleId: profile.id,
                    username: profile.displayName
                }).then((newUser) => {
                    done(null, newUser);
                });
            }
            done(null, res)
        });
    })
);

passport.use(
    new FacebookStrategy({
        callbackURL: '/auth/facebook/redirect',
        clientID: process.env.FACEBOOKAPPID,
        clientSecret: process.env.FACEBOOKSECRETID
    }, (accessToken, refreshToken, profile, done) => {
        knex('users').where({
            facebookId: profile.id
        }).then((res) => {
            if (res.length < 1) {
                return knex('users').insert({
                    googleId: profile.id,
                    username: profile.displayName
                }).then((newUser) => {
                    done(null, newUser);
                });
            }
            done(null, res)
        });
    })
);
