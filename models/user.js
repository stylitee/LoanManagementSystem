// models/user.js
const users = [
    { username: 'admin', password: 'password' }
  ];
  
  module.exports = {
    findByUsername: function (username) {
      return users.find(user => user.username === username);
    }
  };
  