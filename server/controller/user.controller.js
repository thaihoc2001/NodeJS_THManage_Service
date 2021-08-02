const express = require('express');
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.updateUser = async (req, res) => {
    try{
        const token = req.headers['authorization'].split(' ')[1];
        const user_jwt = jwt.verify(token, process.env.JWT_SECRET);
        if(user_jwt.id !== req.params.id){
            res.status(401).send('Erro: Don\'t have acount');
        }
        const _id = user_jwt.id;
        const user = await User.findOne({_id});
        const data = {
                username: user.username,
                password: req.body.password || user.password,
                fullname: req.body.fullname || user.fullname,
                phone : req.body.phone,
                email: req.body.email,
                address: req.body.address,
                dob: req.body.dob,
                role: user.role
            };
        await User.updateOne(
            {_id},
            {
                $set: (data)
            }
        )
        res.status(200).json({message: 'Update suscess', Success: true})
    } catch (err) {
        res.status(400).json({message: err, success: false});
    }
}