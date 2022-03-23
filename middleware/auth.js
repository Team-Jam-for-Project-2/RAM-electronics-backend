
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const secret =
//THIS NEXT LINE IMPLIES THAT I SHOULD HAVE A VARIABLE JWT_SECRET IN THE .ENV FILE BUT I DON'T KNOW SO I DIDN'T DO IT
  process.env.JWT_SECRET || 'super secret string!';


const { Strategy, ExtractJwt } = require('passport-jwt');


const opts = {

  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

  secretOrKey: secret,
};


const User = require('../db/models/users.js');


const strategy = new Strategy(opts, function (jwt_payload, done) {
 
  User.findById(jwt_payload.id)
    
    .then((user) => done(null, user))
    
    .catch((err) => done(err));
});


passport.use(strategy);


passport.initialize();


const requireToken = passport.authenticate('jwt', { session: false });


const createUserToken = (req, user) => {
 
  if (
    !user ||
    !req.body.password ||
    !bcrypt.compareSync(req.body.password, user.password)
  ) {
    const err = new Error('The provided username or password is incorrect' + " body pass " +req.body.password + " User pass " + user.password + " bcrypt.compareSync(req.body.password, user.password) is " +bcrypt.compareSync(req.body.password, user.password) + " !bcrypt.compareSync(req.body.password, user.password) is " + !bcrypt.compareSync(req.body.password, user.password) + " !user is " + !user + " user is " + user + " !req.body.password is " + !req.body.password + " and req.body.password is " + req.body.password);
    err.statusCode = 422;
    throw err;
  }
  
  return jwt.sign({ id: user._id }, secret, { expiresIn: 36000 });
};

module.exports = {
  requireToken,
  createUserToken,
};

//below is a token that was given to me when I got rid of the requirement on ln 50
// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I4YmYyNjVjZWFkOTA1YThiNDUwMCIsImlhdCI6MTY0ODA3MjcyNCwiZXhwIjoxNjQ4MTA4NzI0fQ.LDOApqDwSftjfKe-b-zlb9lJwCGApH84j93CDKVzSDA"
// }
// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I4YmYyNjVjZWFkOTA1YThiNDUwMCIsImlhdCI6MTY0ODA3Mzk1MCwiZXhwIjoxNjQ4MTA5OTUwfQ.rS4afk2mSZLLb-PAk1lNEh2JTWRgl8lmvAh3X4JSS_g"
// }