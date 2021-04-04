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
  const {data:{username}} = tokenHandler.getData(token);
  console.log(username)
  const db = new database(username);
   const result = await db.get(`users`, username);
     const {friends} = result
  res.json({
    friends: {
      username: username,
      friends: friends
    },
  });
});

// add friend

router.post('/addfriend' ,(req, res) => {
  const {data:{username}} =  res.body;
   const 
})
module.exports = router;
