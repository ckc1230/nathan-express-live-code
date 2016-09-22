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
