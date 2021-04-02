const express = require("express");
const router = express.Router();
const rest_api = require("./rest");
const webSocket = require("./socket");
const cors = require("cors");
const { authenticate } = require("./auth");
const database = require("../Database/index");
const tokenHandler = require("../Token/index");
router.use("/api", rest_api);
router.use(cors());

router.use(express.json());

router.post("/register", async(req, res) => {
  try {
    const { username, email, uid } = req.body.data;
    const db = new database(username);
    const template = {
      username: username,
      email: email,
      uid: uid,
      friends: [],
      content: [],
    };
   const result = await db.newUser(template);
        const token = tokenHandler.createToken(req.body);

        res.json({
          status: "200",
          token: token,
        });
    
  
  } catch (e) {
      console.log(e)
    res.json({
      error: e,
      status: 500,
    });
  }
  console.log(req.body);
});

module.exports = router;
