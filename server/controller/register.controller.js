const express = require('express');
User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports.register = async (req, res) => {
    try {
        const username = req.body.username
        const password = await bcrypt.hash(req.body.password, 10)
        const name = req.body.name
        const phone= req.body.phone
        const email = req.body.email
        console.log(username)
        const newUser = new User({
            username: username,
            password: password,
            name: name,
            phone: phone,
            email: email
        })
        console.log(newUser)
        const saveUser = await newUser.save();
        if (saveUser){
            res.status(200).send('Register success');
        }else{
            res.status(401).send('Register fail')
        }
    }catch (err) {
        return res.status(400).send(err);
        console.log(err);
    }
}