const express= require('express')
const router= express.Router()
const { fetchAll} = require('../controllers/controllers')

//route to fetch all news
router.get('/',fetchAll);


module.exports=router