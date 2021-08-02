const express = require('express');
User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports.registerStaff = async (req, res) => {
    try {
        const username = req.body.username
        const password = await bcrypt.hash(req.body.password, 10)
        const name = req.body.name
        const role = 'staff'
        const newUser = new User({
            username: username,
            password: password,
            fullname: name,
            roll: role
        })
        const saveUser = await newUser.save();
        if (saveUser){
            res.status(200).send('Register success');
        }else{
            res.status(401).send('Register fail')
        }
    }catch (err) {
        return res.status(400).send(err);
    }
}
module.exports.registerManage = async (req, res) => {
    try {
        const username = req.body.username
        const password = await bcrypt.hash(req.body.password, 10)
        const name = req.body.name
        const role = 'manage'
        const newUser = new User({
            username: username,
            password: password,
            fullname: name,
            roll: role
        })
        const saveUser = await newUser.save();
        if (saveUser){
            res.status(200).send('Register success');
        }else{
            res.status(401).send('Register fail')
        }
    }catch (err) {
        return res.status(400).send(err);
    }
}
