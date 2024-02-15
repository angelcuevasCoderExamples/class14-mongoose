const {Router} = require('express');

const router = Router()

router.get('/',(req, res)=>{
    res.send({status:'success', users:[]})
})

router.post('/',(req, res)=>{
    res.send({status:'suscess'})
})

router.put('/:uid',(req, res)=>{
    res.send({status:'suscess'})
})

router.delete('/:uid',(req, res)=>{
    res.send({status:'suscess'})
})