const fs = require("./firebase");
class database {
  constructor(username) {
    this.username = username;
  }

  sendFriendRequest = async ({ to, from }) => {
    const userExist = await this.userExist(to);
    if (userExist) {
      //send request
      const pastQue = await this.get('users', to)
        const {friendsQue} = pastQue
      fs.collection("users").doc(to).update({friendsQue: friendsQue.push(to)});
      return {
        isValid: true
      }
    } else {
      return {
        isValid: false
      }
    }
  };

  newToken = async (collection, uid) => {
    const docRef = fs.collection(collection).where("uid", "==", uid);
    const result = await docRef
      .get()
      .then((doc) => doc.docs.map((d) => d.data()));
    const user = result[0];
    console.log("-- user", user);
    if (user) {
      return { data: { username: user.username, uid: uid } };
    } else {
      return;
    }
  };
  get = async (collection, doc) => {
    const docRef = fs.collection(collection).doc(doc);
    const result = await docRef
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
    console.log(result);
    return result;
  };

  userExist = async (username) => {
    const usersRef = fs.collection("users").doc(username);

    const docExist = await usersRef.get().then((doc) => {
      if (doc.exists) {
        return true;
      } else {
        return false;
      }
    });
    console.log("exist? ->", docExist);

    return docExist;
  };

  post = async ({ collection, data }) => {
    const ref = fs.collection(collection);
    const docId = ref.add(data).then((doc) => doc.id);

    return await docId;
  };
  newUser = async (data) => {
    const ref = fs.collection("users");
    if (this.userExist(data.username) == true) {
      return {
        error: "User Exists!",
      };
    } else {
      fs.collection("users").doc(data.username).set(data);
      return {
        success: "did upload",
      };
    }

    return await result;
  };
}
module.exports = database;
