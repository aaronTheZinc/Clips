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
          console.log(doc.data());
          return doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        return error;
      });
    return result;
  };

  userExist = async(username) => {

  const usersRef = fs.collection('users').doc(username)

  const docExist = await usersRef.get().then((doc) =>{
    if(doc.exists) {
      return true
    }else {
      return false
    }
  })
  console.log('exist? ->', docExist)
  

    return docExist

  }

  post = async({ collection, data }) => {
    const ref = fs.collection(collection);
    const docId = ref.add(data).then((doc) => doc.id); 
      
      return await docId
  };
  newUser = async(data) => {
   const ref = fs.collection('users')
   if(this.userExist(data.username) == true) {
     return {
       error: "User Exists!"
     }
   } else {
    fs.collection('users').doc(data.username).set(data)
    return {
      success: 'did upload'
    }
    
   }


      return await result
  }
}
module.exports = database;
