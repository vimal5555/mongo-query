const express = require('express');

var backDB = require('../Models/back.model');

/** To add Data on DB by using this API */
exports.dataSubmit = (req, res) => {
     try {
          let data = [
               {
                   "_id": "63eddbbf561fbf47c893e1e6",
                   "index": 0,
                   "name": "Aurelia Gonzales",
                   "isActive": false,
                   "registered": "2015-02-11T04:22:39+0000",
                   "age": 20,
                   "gender": "female",
                   "eyeColor": "green",
                   "favoriteFruit": "banana",
                   "company": {
                       "title": "YURTURE",
                       "email": "aureliagonzales@yurture.com",
                       "phone": "+1 (940) 501-3963",
                       "location": {
                           "country": "USA",
                           "address": "694 Hewes Street"
                       }
                   },
                   "tags": [
                       "enim",
                       "id",
                       "velit",
                       "ad",
                       "consequat"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1e7",
                   "index": 1,
                   "name": "Kitty Snow",
                   "isActive": false,
                   "registered": "2018-01-23T04:46:15+0000",
                   "age": 38,
                   "gender": "female",
                   "eyeColor": "blue",
                   "favoriteFruit": "apple",
                   "company": {
                       "title": "DIGITALUS",
                       "email": "kittysnow@digitalus.com",
                       "phone": "+1 (949) 568-3470",
                       "location": {
                           "country": "Italy",
                           "address": "154 Arlington Avenue"
                       }
                   },
                   "tags": [
                       "ut",
                       "voluptate",
                       "consequat",
                       "consequat"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1e8",
                   "index": 2,
                   "name": "Hays Wise",
                   "isActive": false,
                   "registered": "2015-02-23T10:22:15+0000",
                   "age": 24,
                   "gender": "male",
                   "eyeColor": "green",
                   "favoriteFruit": "strawberry",
                   "company": {
                       "title": "EXIAND",
                       "email": "hayswise@exiand.com",
                       "phone": "+1 (801) 583-3393",
                       "location": {
                           "country": "France",
                           "address": "795 Borinquen Pl"
                       }
                   },
                   "tags": [
                       "amet",
                       "ad",
                       "elit",
                       "ipsum"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1e9",
                   "index": 3,
                   "name": "Karyn Rhodes",
                   "isActive": true,
                   "registered": "2014-03-11T03:02:33+0000",
                   "age": 39,
                   "gender": "female",
                   "eyeColor": "green",
                   "favoriteFruit": "strawberry",
                   "company": {
                       "title": "RODEMCO",
                       "email": "karynrhodes@rodemco.com",
                       "phone": "+1 (801) 505-3760",
                       "location": {
                           "country": "USA",
                           "address": "521 Seigel Street"
                       }
                   },
                   "tags": [
                       "cillum",
                       "exercitation",
                       "excepteur"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1ea",
                   "index": 4,
                   "name": "Alison Farmer",
                   "isActive": false,
                   "registered": "2018-01-22T10:05:45+0000",
                   "age": 33,
                   "gender": "female",
                   "eyeColor": "brown",
                   "favoriteFruit": "banana",
                   "company": {
                       "title": "OTHERSIDE",
                       "email": "alisonfarmer@otherside.com",
                       "phone": "+1 (902) 572-3954",
                       "location": {
                           "country": "Italy",
                           "address": "356 Newkirk Placez"
                       }
                   },
                   "tags": [
                       "deserunt",
                       "et",
                       "duis",
                       "dolor"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1eb",
                   "index": 5,
                   "name": "Grace Larson",
                   "isActive": true,
                   "registered": "2014-04-20T11:37:23+0000",
                   "age": 20,
                   "gender": "female",
                   "eyeColor": "blue",
                   "favoriteFruit": "apple",
                   "company": {
                       "title": "OVOLO",
                       "email": "gracelarson@ovolo.com",
                       "phone": "+1 (930) 510-3310",
                       "location": {
                           "country": "USA",
                           "address": "932 Linden Street"
                       }
                   },
                   "tags": [
                       "fugiat",
                       "minim"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1ec",
                   "index": 6,
                   "name": "Carmella Morse",
                   "isActive": false,
                   "registered": "2014-06-08T11:20:22+0000",
                   "age": 39,
                   "gender": "female",
                   "eyeColor": "green",
                   "favoriteFruit": "apple",
                   "company": {
                       "title": "SHEPARD",
                       "email": "carmellamorse@shepard.com",
                       "phone": "+1 (829) 478-3744",
                       "location": {
                           "country": "Germany",
                           "address": "379 Tabor Court"
                       }
                   },
                   "tags": [
                       "amet",
                       "cillum"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1ed",
                   "index": 7,
                   "name": "Anastasia Blake",
                   "isActive": true,
                   "registered": "2016-07-01T02:32:46+0000",
                   "age": 40,
                   "gender": "female",
                   "eyeColor": "brown",
                   "favoriteFruit": "strawberry",
                   "company": {
                       "title": "ZERBINA",
                       "email": "anastasiablake@zerbina.com",
                       "phone": "+1 (867) 563-3788",
                       "location": {
                           "country": "Italy",
                           "address": "147 Montague Terrace"
                       }
                   },
                   "tags": [
                       "Lorem",
                       "consequat",
                       "ex",
                       "pariatur",
                       "labore"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1ee",
                   "index": 8,
                   "name": "Dale Holman",
                   "isActive": false,
                   "registered": "2014-07-11T09:08:36+0000",
                   "age": 22,
                   "gender": "male",
                   "eyeColor": "green",
                   "favoriteFruit": "strawberry",
                   "company": {
                       "title": "ISONUS",
                       "email": "daleholman@isonus.com",
                       "phone": "+1 (871) 452-3036",
                       "location": {
                           "country": "Italy",
                           "address": "586 Blake Court"
                       }
                   },
                   "tags": [
                       "tempor",
                       "aliqua",
                       "duis"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1ef",
                   "index": 9,
                   "name": "Tina Barnett",
                   "isActive": true,
                   "registered": "2015-03-09T11:16:38+0000",
                   "age": 39,
                   "gender": "female",
                   "eyeColor": "blue",
                   "favoriteFruit": "apple",
                   "company": {
                       "title": "JETSILK",
                       "email": "tinabarnett@jetsilk.com",
                       "phone": "+1 (963) 569-3905",
                       "location": {
                           "country": "Germany",
                           "address": "514 Lefferts Avenue"
                       }
                   },
                   "tags": [
                       "veniam",
                       "proident"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1f0",
                   "index": 10,
                   "name": "Belinda Zimmerman",
                   "isActive": true,
                   "registered": "2015-11-19T02:18:09+0000",
                   "age": 34,
                   "gender": "female",
                   "eyeColor": "green",
                   "favoriteFruit": "apple",
                   "company": {
                       "title": "COMTRAK",
                       "email": "belindazimmerman@comtrak.com",
                       "phone": "+1 (899) 410-3073",
                       "location": {
                           "country": "France",
                           "address": "259 Bergen Street"
                       }
                   },
                   "tags": [
                       "nisi",
                       "officia",
                       "nisi"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1f1",
                   "index": 11,
                   "name": "Morrison Sheppard",
                   "isActive": false,
                   "registered": "2014-07-23T04:46:35+0000",
                   "age": 34,
                   "gender": "male",
                   "eyeColor": "green",
                   "favoriteFruit": "strawberry",
                   "company": {
                       "title": "CANDECOR",
                       "email": "morrisonsheppard@candecor.com",
                       "phone": "+1 (825) 473-3920",
                       "location": {
                           "country": "USA",
                           "address": "585 Wilson Street"
                       }
                   },
                   "tags": [
                       "culpa",
                       "adipisicing",
                       "veniam",
                       "aliquip"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1f2",
                   "index": 12,
                   "name": "Le Farley",
                   "isActive": false,
                   "registered": "2014-11-24T07:41:12+0000",
                   "age": 36,
                   "gender": "male",
                   "eyeColor": "green",
                   "favoriteFruit": "banana",
                   "company": {
                       "title": "JAMNATION",
                       "email": "lefarley@jamnation.com",
                       "phone": "+1 (962) 402-3088",
                       "location": {
                           "country": "USA",
                           "address": "613 Lewis Avenue"
                       }
                   },
                   "tags": [
                       "exercitation",
                       "enim",
                       "deserunt"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1f3",
                   "index": 13,
                   "name": "Sharon Grimes",
                   "isActive": true,
                   "registered": "2017-12-22T01:04:16+0000",
                   "age": 28,
                   "gender": "female",
                   "eyeColor": "brown",
                   "favoriteFruit": "banana",
                   "company": {
                       "title": "PHARMEX",
                       "email": "sharongrimes@pharmex.com",
                       "phone": "+1 (993) 428-2724",
                       "location": {
                           "country": "USA",
                           "address": "427 Dictum Court"
                       }
                   },
                   "tags": [
                       "dolor",
                       "eiusmod",
                       "esse"
                   ]
               },
               {
                   "_id": "63eddbbf561fbf47c893e1f4",
                   "index": 14,
                   "name": "Wendy Sampson",
                   "isActive": true,
                   "registered": "2017-03-28T04:46:20+0000",
                   "age": 20,
                   "gender": "female",
                   "eyeColor": "blue",
                   "favoriteFruit": "strawberry",
                   "company": {
                       "title": "BUGSALL",
                       "email": "wendysampson@bugsall.com",
                       "phone": "+1 (822) 433-3614",
                       "location": {
                           "country": "France",
                           "address": "864 Times Placez"
                       }
                   },
                   "tags": [
                       "non",
                       "sunt",
                       "officia"
                   ]
               },
               {
                   "_id": "63edde1d599331ee31b66311",
                   "index": 15,
                   "name": "Nivesh Krishna",
                   "isActive": true,
                   "registered": "2015-02-11T04:22:39.000Z",
                   "age": 23,
                   "gender": "male",
                   "eyeColor": "black",
                   "company": {
                       "title": "Osiz",
                       "email": "niveshkrishna.k@osiztechnologies.com",
                       "phone": "+91 6369790167",
                       "location": {
                           "country": "IN",
                           "address": "107 Gandhiji Street"
                       }
                   },
                   "tags": [
                       "Hard Worker",
                       "Quick Leraner",
                       "Smart Boy",
                       "GOP",
                       "GOAT"
                   ],
                   "__v": 0,
                   "favoriteFruit": "Banana"
               }
           ]
          backDB.insertMany(data, (err, data) => {
               if (err) {
                    return res.json({ status: 409, message: 'Error inserting data' });
               }
               else {
                    return res.json({ status: 200, message: ' Submitted successfully', data: data });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

/** Instead of using find in JS, use Aggregate function to find all data from DB
 * @return {match} aggregate Functions.
 * see neither the both example on this function.
 */
exports.dataGetAll = (req, res) => {
     try {
          backDB.aggregate([{ $match: {} }], (err, data) => {
               if (data.length > 0) {
                    return res.json({ status: 200, message: 'Fetched', data: data });
               } else {
                    return res.json({ status: 404, message: 'Errored' });
               }
          })

          // backDB.find({}, (err, result) => {
          //      if (err) {
          //           return res.json({ status: 404, message: 'Errred' });
          //      }
          //      else {
          //           return res.json({ status: 200, message: 'Fetched', data: result });
          //      };
          // })
     }
     catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

/** To Find the Status of User by their Activity Status using Aggregate.
 * Using Post Method to get Specified data from DB.
 * @return {match} aggregate Functions.
 */
exports.dataGetActive = (req, res) => {
     try {
          let data = req.body.active;
          backDB.aggregate([{ $match: { isActive: data } }], (err, result) => {
               if (result.length > 0) {
                    return res.json({ status: 200, message: 'Fetched', data: result });
               } else {
                    return res.json({ status: 404, message: 'Errored' })
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

/** To Find Specified Stage Details from the DB by Using Post Method with Aggregate Function. 
 * @return {match} aggregate Functions.
*/
exports.dataGetTagsDetails = (req, res) => {
     try {
          let data = req.body.tags;
          data = parseInt(data);
          backDB.aggregate([{ $match: { tags: { $size: data } } }], (err, tags) => {
               console.log('err: ', err);
               console.log('tags: ', tags);
               if (tags.length > 0) {
                    return res.json({ status: 200, message: 'Fetched', data: tags });
               } else {
                    return res.json({ status: 404, message: 'Errored' })
               }

          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

/** To Find the Age Details of an User by Using Aggregate Function. 
 * @return {match} aggregate Functions.
*/
exports.dataGetAgeDetails = (req, res) => {
     try {
          let data = req.body.age;
          data = parseInt(data);
          backDB.aggregate([{ $match: { age: data } }], (err, result) => {
               console.log('result: ', result);
               if (result.length) {
                    return res.json({ status: 200, message: 'Fetched', result: result });
               } else {
                    return res.json({ status: 404, message: 'Error' });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

/** To Get Some Specified data from DB No need to any other
 * @return {project} aggregate Functions.
 */
exports.dataGetSpecificDetails = (req, res) => {
     try {
          backDB.aggregate([{ $project: { _id: 0, name: 1, age: 1, gender: 1, eyeColor: 1, favouriteFruit: 1 } }], (err, result) => {
               if (err) {
                    return res.json({ status: 409, message: 'Errored' })
               } else {
                    return res.json({ status: 200, message: 'Fetched', data: result });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

/** To Find the Count of an Array by Using Some Aggregate Function
 *  @return {project, group} Function.
 */
exports.dataGetTagsCount = (req, res) => {
     try {
          backDB.aggregate([{ $project: { _id: 0, tags: 1 } }, { $group: { _id: '$tags', count: { $sum: 1 } } }], (err, result) => {
               if (err !== null) {
                    return res.json({ status: 409, message: 'Errored' })
               } else {
                    return res.json({ status: 200, message: 'Fetched', tags: result });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

exports.dataGetAggResults = (req, res) => {
     try {
          backDB.aggregate(
               [
                    { $project: { _id: 0, tags: 1, name: 1 } },
                    { $group: { _id: '$name', count: { $sum: 1 } } },
                    { $out: 'aggResults' }
               ], (err, results) => {
                    results.aggregate([{ $match: {} }], (err, results1) => {
                         if (err) {
                              return res.json({ status: 409, message: 'Errored' });
                         } else {
                              return res.json({ status: 200, message: 'Fetch', data: results1 });
                         }
                    })

               })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

