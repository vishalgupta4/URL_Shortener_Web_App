const express=require('express')
const URL=require('../Models/url')
const homerouter=express.Router()

homerouter.route('/').get((req, res) =>res.render("index"))
homerouter.route('/analytics').get(async(req, res) =>{
    const allUrls= await URL.find({})
    res.render("analytics",{
        allUrls,
    })
})

module.exports=homerouter;