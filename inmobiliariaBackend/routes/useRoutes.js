const express = require('express');
const router = express.Router()

router.get("/user", listUser);
router.post("/user/new", newUser);



module.exports = router;


