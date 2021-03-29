const fs = require("./firebase");
class database {
  constructor(username) {
    this.username = username;
  }

  get = async (route) => {
    const docRef = fs.collection(route).doc(this.username);
   const result = docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
            console.log(doc.data())
            return doc.data()
            
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        return error
      });
      return result
  };

}
module.exports = database;
