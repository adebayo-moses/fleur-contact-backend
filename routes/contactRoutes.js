const express = require('express');
const router = express.Router();
const {getContact} = 

router.route('/').get((req, res) => {
    res.status(200).json({message:'No contacts yet'});
});

router.route('/').post((req, res) => {
    res.status(200).json({message:'Create Contact'});
});

router.route('/:id').get((req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});

router.route('/:id').put((req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

router.route('/:id').delete((req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});

module.exports=router;