const { users } = require("../Data/Data")

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    }
  },

  Mutation: {
    createUser(parent, args) {
      // Obj conatining new user info
      const newUser = args ;
      users.push(newUser);
      return newUser;
    }
  }
}

module.exports = {resolvers};