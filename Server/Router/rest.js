const express = require("express")
const router = express.Router();
const database = require("../Database/index");
const { authenticate } = require("./auth");
const tokenHandler = require("../Token/index");

const cors = require("cors");
router.use((req, res, next) =>
  authenticate({
    req: req,
    res: res,
    next: next,
  })
);
router.use(cors());
router.use(express.json())

router.post("/friends", async (req, res) => {
  const { token } = req.query;
  const {
    data: { username },
  } = tokenHandler.getData(token);
  console.log(username);
  const db = new database(username);
  const result = await db.get(`users`, username);
  const { friends } = result;
  res.json({
    friends: {
      username: username,
      friends: friends,
    },
  });
});

router.post('/', (req, res) => {
  res.send('authenticated')
})
// add friend

router.post("/addfriend", (req, res) => {
  console.log('end point hit')
  const {user} = req.body;
  const {token} = req.query
  const {
    data: { username },
  } = tokenHandler.getData(token);
  const db = new database(username);
  const didSend = db.sendFriendRequest({ to: user, from: username });
  didSend.isValid === true
    ? res.json({ status: 200, message: "friend request sent!" })
    : res.json({ status: 404, message: "username not found" });
  res.json({status: 200})
});
module.exports = router;
