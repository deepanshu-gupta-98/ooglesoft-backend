const UserRouter = require('../controller/UserController')
const router = require('express').Router()

router.post("/user-add" , UserRouter.userAdd);


module.exports = router