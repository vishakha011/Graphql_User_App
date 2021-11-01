const { users } = require("../Data/Data")
console.log(users);
const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    }
  },

  Mutation: {
    createUser(parent, args) {
      // Obj containing new user info
      console.log("calling mutation ", parent);
      const newUser = args;
      users.push(newUser);
      return newUser;
    },

    // deleteUser:async (parent, { id }) => {
      
    //   const ok = Boolean(users[id]);
    //   delete users[id];

    //   return { ok };
    // },
    
    

  }

}

module.exports = { resolvers };