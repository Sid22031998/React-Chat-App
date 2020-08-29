const express=require('express');
const router=express.Router();

router.get('/', (req, res)=> {
    res.redirect('https://cocky-morse-991047.netlify.app/');
})

module.exports = router;