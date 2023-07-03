const { signup, login } = require("../controller/userController");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
router.all("/*", (req, res) => {
  return res.status(404).send({
    status: false,
    msg: "This API request is not available! useRoute",
  });
});
module.exports = router;
