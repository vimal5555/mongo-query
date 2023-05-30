const express = require('express');

var courseDB = require('../Models/course.model');


exports.courseSubmit = (req, res) => {
     try {
          let data =  [
               {
                   "_id": "63f08482dc06a4bb5200ee80",
                   "university": "USAL",
                   "name": "Computer Science",
                   "level": "Excellent",
                   "__v": 0
               },
               {
                   "_id": "63f084b3dc06a4bb5200ee82",
                   "university": "Anna",
                   "name": "CSE",
                   "level": "Fluent",
                   "__v": 0
               },
               {
                   "_id": "63f084c2dc06a4bb5200ee84",
                   "university": "Se Chek",
                   "name": "MS",
                   "level": "Fantabulous",
                   "__v": 0
               },
               {
                   "_id": "63f084dadc06a4bb5200ee86",
                   "university": "Oxford",
                   "name": "English",
                   "level": "Pro",
                   "__v": 0
               }
           ]
          courseDB.insertMany(data, (err, result) => {
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

exports.getCourse = (req, res) => {
     try {
          courseDB.aggregate([{ $match: {} }], (err, result) => {
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