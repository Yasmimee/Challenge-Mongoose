const { Router } = require('express')
const express= require('express')
const { readSync } = require('fs')
const contact = require('../models/contact')


const route=express.Router()

route.post('/', async( req, res) =>{

    try {

        const found= await contact.findOne({email})
        if (found){
            return res.status(200).send({msg:'user already exists!'})
        }

        const Addedcontact= new contact(req.body)

        await Addedcontact.save()
        res.status(200).send({msg:'added', Addedcontact})

    } catch (error) {
        res.status(400).send({msg:'could not add user'})
    }
}
)

route.get('/', async (req,res)=>{
    try{
        const Contacts=  await contact.find()
        res.status(200).send({msg:"list of users", Contacts})
    }catch (error){
        res.status(500).send({msg:'could not find contacts'})
    }
}
)
route.delete('/:ID',  async (req,res)=>{
    const {ID}=req.params
    try {
        const removecontact=  await contact.findByIdAndDelete(ID)
        res.status(200).send({msg:'user deleted'})
    } catch (error) {
       res.status(500).send({msg:" could not delete user"}) 
    }
}
)

route.put('/:ID', async (req,res)=>{
    const {ID}=req.params
    try {
        const updateuser= await contact.findByIdAndUpdate(ID, {$set: {...req.body}})
        res.status(200).send({msg:'user updated', updateuser})
    } catch (error) {
        res.status(500).send({msg:"could not update user"})
    }

    route.get('/:ID', (req,res)=>{
       const {ID}=req.params
        try {
            const contact=contact.findById(ID)
            res.status(200).send({msg:"contact ", contact})
        } catch (error) {
            res.status(400).send({msg:" user not found "})
        }
    })
}

)


module.exports=route