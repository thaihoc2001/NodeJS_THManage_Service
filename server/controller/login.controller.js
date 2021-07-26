const express = require('express');
User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.login = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({username}).lean();
        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign({
                id: user._id,
                username: user.username
            }, process.env.JWT_SECRET)
            res.status(200).json({
                token: token,
                message: "Login success",
                success: true
            })
        }else{
            res.status(401).send('Login fail');
        }
    } catch (err){
        res.status(401).send(err)
    }
}
