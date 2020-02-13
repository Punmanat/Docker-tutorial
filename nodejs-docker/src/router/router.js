const express = require("express")
const router = express.Router()
var giphy = require('giphy-api')();

router.get("/", (req,res)=>{
    giphy.search('cat', function (err, data) {
        const list_cats = data.data
        var item = list_cats[Math.floor(Math.random() * list_cats.length)]
        const url = item.images.downsized_large.url
        console.log(url)
        res.render("index", {url})
    });
})

module.exports = router