// HELLO WDI32!

/*
 * NPM Setup
 */

// # make `package.json` file
// > echo '{}' > package.json
// > npm install --save express
// > npm install --save mongoose

// # Git Ignore node_modules folder:
// > echo 'node_modules' > .gitignore

/*
 * DATABASE
 */

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/contact_list_app"); // connect (make sure to run `mongod` command!)

// Model
var userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true // uniqueness constraint
  },
  password_digest: String
});

var User = mongoose.model("User", userSchema);
// module.exports.User = User; // export User model for use in other files


// // Create `seed.js` to populate database with a user:
// -----------------------
// var kenny = new User({
//   name: "Kenny",
//   username: "kennybboy2000"
// });

// kenny.save(function(err){
//   if (err) { return console.log(err); }
//   console.log("Success, created user!")
// });
// ------------------------------


// /*
//  * EXPRESS
//  */


var express = require('express');
var app = express();

// Routes + Controller Actions

// HTML Endpoints
app.get('/', function homepage(req, res){
  res.sendFile(__dirname + '/index.html'); // absolute path to html file
});

/*
 * Example HTML file
 * > touch index.html
 *
 * <h1>Sanity Check</h1>
 */


// JSON API Endpoints
app.get('/api/users', function userIndex(req, res) {

  User.find({}, function(err, users){
    res.json(users);
  })

});

app.listen(3000);
