// HELLO WDI32!

// NPM
// # make `package.json` file
// > echo '{}' > package.json
// > npm install --save express
// > npm install --save mongoose

// # Git Ignore node_modules folder:
// > echo 'node_modules' > .gitignore

// Database
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

// User.find({}, function(err, users){
//   console.log("There are", users.length, "users")
// })
// ------------------------------

