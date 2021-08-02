const express = require('express');
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.checkToken = async (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    if(token){
        const user_jwt = jwt.verify(token, process.env.JWT_SECRET);
        const _id = user_jwt.id;
        const listUser = await User.find();
        for (let user of listUser){
            if(user.id === user_jwt.id){
                next();
            }else{
                res.status(400).send('Errr: Token fail !!')
            }
        }
    }
}