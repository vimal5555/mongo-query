const express = require('express');

var universityDB = require('../Models/university.model');

/** To Submit data on DB */
exports.universitySubmit = (req, res) => {
     try {
          let data = [
               {
                   "_id": "63f080e9a2b70131d3c15a20",
                   "country": "India",
                   "city": "Tamil Nadu",
                   "name": "Anna",
                   "location": {
                       "type": "Torture",
                       "coordinates": [
                           1.67512,
                           12,
                           20.9607792
                       ]
                   },
                   "students": [
                       {
                           "year": 2018,
                           "number": 36563,
                           "_id": "63f080e9a2b70131d3c15a21"
                       },
                       {
                           "year": 2019,
                           "number": 63697,
                           "_id": "63f080e9a2b70131d3c15a22"
                       },
                       {
                           "year": 2020,
                           "number": 10679,
                           "_id": "63f080e9a2b70131d3c15a23"
                       },
                       {
                           "year": 2021,
                           "number": 45688,
                           "_id": "63f080e9a2b70131d3c15a24"
                       }
                   ],
                   "__v": 0
               },
               {
                   "_id": "63f0812fa2b70131d3c15a26",
                   "country": "Spain",
                   "city": "Salamanco",
                   "name": "USAL",
                   "location": {
                       "type": "Point",
                       "coordinates": [
                           1.67512,
                           12,
                           20.9607792
                       ]
                   },
                   "students": [
                       {
                           "year": 2018,
                           "number": 12345,
                           "_id": "63f0812fa2b70131d3c15a27"
                       },
                       {
                           "year": 2019,
                           "number": 67890,
                           "_id": "63f0812fa2b70131d3c15a28"
                       },
                       {
                           "year": 2020,
                           "number": 46468,
                           "_id": "63f0812fa2b70131d3c15a29"
                       },
                       {
                           "year": 2021,
                           "number": 77894,
                           "_id": "63f0812fa2b70131d3c15a2a"
                       }
                   ],
                   "__v": 0
               },
               {
                   "_id": "63f08176a2b70131d3c15a2c",
                   "country": "America",
                   "city": "Oklahama",
                   "name": "Se Chek",
                   "location": {
                       "type": "Pressure",
                       "coordinates": [
                           2.67512,
                           12,
                           20.9607792
                       ]
                   },
                   "students": [
                       {
                           "year": 2018,
                           "number": 30215,
                           "_id": "63f08176a2b70131d3c15a2d"
                       },
                       {
                           "year": 2019,
                           "number": 45688,
                           "_id": "63f08176a2b70131d3c15a2e"
                       },
                       {
                           "year": 2020,
                           "number": 78981,
                           "_id": "63f08176a2b70131d3c15a2f"
                       },
                       {
                           "year": 2021,
                           "number": 56414,
                           "_id": "63f08176a2b70131d3c15a30"
                       }
                   ],
                   "__v": 0
               },
               {
                   "_id": "63f081daa2b70131d3c15a33",
                   "country": "England",
                   "city": "Ireland",
                   "name": "Oxford",
                   "location": {
                       "type": "Break",
                       "coordinates": [
                           5.67512,
                           12,
                           20.9607792
                       ]
                   },
                   "students": [
                       {
                           "year": 2018,
                           "number": 63697,
                           "_id": "63f081daa2b70131d3c15a34"
                       },
                       {
                           "year": 2019,
                           "number": 90167,
                           "_id": "63f081daa2b70131d3c15a35"
                       },
                       {
                           "year": 2020,
                           "number": 90875,
                           "_id": "63f081daa2b70131d3c15a36"
                       },
                       {
                           "year": 2021,
                           "number": 15153,
                           "_id": "63f081daa2b70131d3c15a37"
                       }
                   ],
                   "__v": 0
               }
           ]
          universityDB.insertMany(data, (err, result) => {
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

/** To Get Data on DB */
exports.getUniversity = (req, res) => {
     try {
          universityDB.aggregate([{ $match: {} }], (err, result) => {
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

/** To Find Specific Details by it's Properties
 * @desc {match, Project} aggregate function.
 * @return {some data} on Result.
 * */
exports.getUniversityByLocation = (req, res) => {
     try {
          let { country, city } = req.body;
          universityDB.aggregate([{ $match: { country: country, city: city } }, { $project: { _id: 0 } }], (err, result) => {
               if (result.length > 0) {
                    return res.json({ status: '200', message: "Fetched", data: result })
               } else {
                    return res.json({ status: '404', message: 'Errored' });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went wrong' });
     }
}

/** To Combine all details fron the Collection.
 * @desc {group} aggregate function.
 */
exports.getUniversityDocumentsCount = (req, res) => {
     try {
          let { name } = req.body;
          universityDB.aggregate([{ $group: { _id: name, totaldocs: { $sum: 1 } } }], (err, result) => {
               if (err) {
                    return res.json({ status: 409, message: 'Error' })
               } else {
                    return res.json({ status: 200, message: 'Fetched', data: result });
               }
          })
     } catch {
          return res.json({ status: 405, message: 'Something Went wrong' });
     }
}

/** To De attach all array attributes to single values
 * Sort function to arrange the value in descending order.
 * limit function used to limit the response from DB.
 * @desc {unwind, match, project, sort, limit} aggregate Function.
 */
exports.getStudentsPerList = (req, res) => {
     try {
          let { name, count } = req.body;
          universityDB.aggregate([{ $match: { name: name } }, { $unwind: '$students' }, { $project: { _id: 0, 'students.year': 1, 'students.number': 1 } }, { $sort: { 'students.number': -1 } }, { $limit: count }], (err, result) => {
               if (err) {
                    return res.json({ status: 409, message: 'Errored' })
               } else {
                    return res.json({ status: 200, message: 'Fetch', data: result })
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something went wrong' });
     }
}

exports.getStudentsCount = (req, res) => {
     try {
          universityDB.aggregate([{ $unwind: '$students' }, { $count: 'total_documents' }], (err, result) => {
               if (err) {
                    return res.json({ status: 409, message: 'Errored' })
               } else {
                    return res.json({ status: 200, message: 'Fetch', data: result })
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something went wrong' });
     }
}