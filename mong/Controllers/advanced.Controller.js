var advancedDB = require('../Models/advanced.model');


exports.dataSubmit = (req, res) => {
     try {
          let data = [
               {
                   "_id": "644a3117b05e2789d5f409a3",
                   "name": "Iphone",
                   "price": 150000,
                   "category": [
                       "Electronics",
                       "SmartPhone"
                   ],
                   "tags": [
                       "Mobile",
                       "Handy"
                   ],
                   "inventory": [
                       50,
                       100,
                       75
                   ],
                   "reviews": [
                       {
                           "author": "Person1",
                           "ratings": "super",
                           "text": "worth to buy",
                           "_id": "644a3117b05e2789d5f409a4"
                       },
                       {
                           "author": "Person2",
                           "ratings": "excellent",
                           "text": "worth to sell",
                           "_id": "644a3117b05e2789d5f409a5"
                       }
                   ],
                   "__v": 0
               },
               {
                   "_id": "644a3155b05e2789d5f409a7",
                   "name": "Product B",
                   "price": 29.99,
                   "category": [
                       "Fashion",
                       "Apparel"
                   ],
                   "tags": [
                       "t-shirt",
                       "jeans",
                       "dress"
                   ],
                   "inventory": [
                       25,
                       150,
                       100
                   ],
                   "reviews": [
                       {
                           "author": "Michael Johnson",
                           "text": "Great t-shirt, fits well and looks good.",
                           "_id": "644a3155b05e2789d5f409a8"
                       },
                       {
                           "author": "Jessica Lee",
                           "text": "The jeans are okay, but the sizing runs small.",
                           "_id": "644a3155b05e2789d5f409a9"
                       }
                   ],
                   "__v": 0
               },
               {
                   "_id": "644a3169b05e2789d5f409ab",
                   "name": "Product A",
                   "price": 10.99,
                   "category": [
                       "Electronics",
                       "Computers"
                   ],
                   "tags": [
                       "laptop",
                       "desk",
                       "keyboard"
                   ],
                   "inventory": [
                       50,
                       100,
                       75
                   ],
                   "reviews": [
                       {
                           "author": "John Smith",
                           "text": "Great keyboard, works well on my desk.",
                           "_id": "644a3169b05e2789d5f409ac"
                       },
                       {
                           "author": "Jane Doe",
                           "text": "Keyboard is good, but the desk drawer is too tight.",
                           "_id": "644a3169b05e2789d5f409ad"
                       }
                   ],
                   "__v": 0
               }
           ]   
          advancedDB.insertMany(data, (err, data) => {
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

exports.datagetAll = (req, res) => {
     try {
          advancedDB.aggregate([{ $match: {} }], (err, data) => {
               if (data.length > 0) {
                    return res.json({ status: 200, message: 'Fetched', data: data });
               } else {
                    return res.json({ status: 404, message: 'Error' });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

exports.getRequiredRatings = (req, res) => {
     try {
          let data = req.body.ratings;
          advancedDB.aggregate([{ $match: { reviews: { $elemMatch: { ratings: data } } } }, { $project: { reviews: 1 } }], (err, data) => {
               if (data.length > 0) {
                    return res.json({ status: 200, message: 'Fetched', data: data })
               } else {
                    return res.json({ status: 404, message: 'Invalid' });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

exports.getOnlyReviews = (req, res) => {
     try {
          advancedDB.aggregate([{ $unwind: "$reviews" }, { $group: { _id: null, reviews: { "$push": "$reviews" } }, }, { $project: { reviews: 1 } }], (err, data) => {
               if (data.length > 0) {
                    return res.json({ status: 200, message: 'Fetched', data: data })
               } else {
                    return res.json({ status: 404, message: 'Invalid' });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}

exports.addInventoryValues = (req, res) => {
     try {
          advancedDB.aggregate([{ $unwind: "$inventory" }, { $group: { _id: null, inventory: { "$push": "$inventory" }, "total": { "$sum": "$inventory" } }, }, { $project: { inventory: 1, total: 1, _id: 0 } },], (err, data) => {
               if (data.length > 0) {
                    return res.json({ status: 200, message: 'Fetched', data: data })
               } else {
                    return res.json({ status: 404, message: 'Invalid' });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}