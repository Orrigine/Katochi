module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '604af00423fc917bdaafa61bebfef52b'),
  },
});
