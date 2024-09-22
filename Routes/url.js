const express=require('express')
const router=express.Router()
const {handlePostUrl,
    handleRedirectUrl,
    }=require("../Controllers/index.js")

router.route('/').post(handlePostUrl);
router.route('/:shortId').get(handleRedirectUrl)

module.exports=router;