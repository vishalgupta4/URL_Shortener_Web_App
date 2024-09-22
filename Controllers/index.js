const URL=require('../Models/url')
const shortid = require('shortid');

async function handlePostUrl(req,res) {
    const {url} =req.body
    if (!url) {
        return res.status(400).json({ error: "PLease Enter a Valid URL." });
    }
    const result=await URL.create({
        shortId:shortid.generate(),
        redirectUrl:url,
        visitHistory:[]
    })
    
    return res.render("index",{
        id : result.shortId,
    })
}

async function handleRedirectUrl(req,res) {
    const id=req.params.shortId
    const entry= await URL.findOneAndUpdate({shortId:id},{$push:{visitHistory:{
        timestamp:Date.now(),
    }}})
    if (!entry) {
        return res.status(404).send('URL not found');
      }
    res.redirect(entry.redirectUrl)
}


module.exports={
    handlePostUrl,
    handleRedirectUrl,
}