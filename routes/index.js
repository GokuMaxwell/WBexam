const router = require('express').Router();
const { Patient, Payment } = require('../models/Patient');
const Admin = require('../models/Admin');


router.get('/', (req, res)=>{
    res.render('home')
})

router.post('/signin', (req, res)=>{
    
});



module.exports = router;