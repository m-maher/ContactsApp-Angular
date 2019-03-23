const express = require('express')

const router = express.Router()

const Contact = require('../models/model')

router.get('/',(req,res)=>{
    res.send('API')
})

router.post('/addcontact',(req,res)=>{
    let contactsData = req.body
    let contact = new Contact(contactsData)
    contact.save((error, addedContact)=>{
        if(error){
            console.log(error)
        } else {
            res.status(200).send(addedContact)
        }
    })
})

router.get('/contacts', (req,res) => {
  Contact.find()
    .then(contact => {
        res.send(contact);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
})

module.exports = router;
