const express = require('express');
const router =  express.Router();


router.get('/login',(req,res)=>res.render('login'));


router.get('/register',(req,res)=>res.render('register'));


//register post

router.post('/register',(req,res)=>{
    const {name,email,password,password2} = req.body;
    // console.log(req.body);
    // res.send("hello");
    let errors =[];

    //cek required
    if(!name||!email||!password||!password2){
        errors.push({msg : 'harap data di input semua'});
    }

    //password 
    if(password !== password2){
        errors.push( {msg :'password tidak sama'});
    }

    if(errors.length>0){
        res.render('register',{
            errors,
        name,
    email,
password,
password2 });
    }else{
        res.send('oke lanjut');
    }

});


module.exports = router;