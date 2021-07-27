const express = require('express');
const User = require('../model/user.model')

module.exports.getAllStaff = async (req, res) => {
    try {
        const staff = await User.find({roll: 'staff'})
        console.log(staff);
        if(staff){
            res.status(200).json(staff)
        }else{
            res.status(400).send('err')
        }
    } catch (err) {
        return res.status(401).send(err)
    }
}