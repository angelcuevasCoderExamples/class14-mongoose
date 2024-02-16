const {Router} = require('express');
const UserModel = require('../models/user');

const router = Router()

router.get('/', async (req, res)=>{
    const users = await UserModel.find()
    res.send({status:'success', users:users})
})

router.post('/',async (req, res)=>{
    try {
        await UserModel.create(req.body)
        res.send({status:'suscess'})
    } catch (error) {
        res.status(400).send({message:'Incomplete data'})
    }
   
})

router.put('/:uid',async (req, res)=>{
    const {uid} = req.params; 

    const {first_name, last_name, age, email } = req.body; 
    await UserModel.updateOne({_id:uid}, {first_name, last_name, age, email })

    res.send({status:'suscess'})
})

router.delete('/:uid',async (req, res)=>{
    const {uid} = req.params; 

    await UserModel.deleteOne({_id:uid})

    res.send({status:'suscess'})
})

module.exports = router; 