const express = require('express');

var rentalDB = require('../Models/rental.model');
var lendDB = require('../Models/lend.model');

exports.rentalSubmit = (req, res) => {
     try {
          let data =[
               {
                   "_id": "63f4ce19a266fa12fe4549a4",
                   "tokenAddress": "0x0dFBa1A3f090b364B9c00D5F7fFad7e2f98a9fe3",
                   "tokenId": "66",
                   "rentalAmount": "0.0001",
                   "duration": "86400",
                   "__v": 0,
                   "beneficiary": "0xb8a760714393d88c6F1e8C78848E363E9181c448"
               },
               {
                   "_id": "63f4d1796d424a16d876ad7f",
                   "tokenAddress": "0x3b37BF933ED61979c76CCfe5e371E3067fb42Fb3",
                   "tokenId": "65",
                   "rentalAmount": "0.001",
                   "duration": "86400",
                   "__v": 0
               }
           ]
          rentalDB.insertMany(data, (err, result) => {
               if (err) {
                    return res.json({ status: 409, message: 'Error inserting' });
               } else {
                    return res.json({ status: 200, message: 'Success' });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something went wrong' })
     }
}

exports.lendSubmitByUser = (req, res) => {
     try {
          let data = req.body;
          lendDB.insertMany(data, (err, result) => {
               if (err) {
                    return res.json({ status: 409, message: 'Inserting Error' })
               } else {
                    return res.json({ status: 200, message: 'Success' })
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something went wrong' })
     }
}


exports.getRental = (req, res) => {
     try {
          rentalDB.aggregate([{ $match: {} }], (err, result) => {
               if (result.length > 0) {
                    return res.json({ status: 200, data: result, message: 'Fetched' })
               } else {
                    return res.json({ status: 404, message: 'Not Found' })
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something went wrong' });
     }
}