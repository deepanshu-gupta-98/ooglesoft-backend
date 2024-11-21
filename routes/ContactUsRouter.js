const ContactUsRouter = require('../controller/ContactUsController')
const router = require('express').Router()

router.post("/contact-us-add" , ContactUsRouter.contactUsAdd);


module.exports = router