const router = require("express").Router();
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
router.get("/friends", async(req, res) => {
  const { token } = req.query;
  const {username} = tokenHandler.getData(token);
  const db = new database(username);
   const result = await db.get(`users`);
     const {friends} = result
  res.json({
    friends: {
      username: username,
      friends: friends
    },
  });
});

module.exports = router;
