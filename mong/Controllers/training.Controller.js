var trainDB = require('../Models/training.model');

exports.dataSubmit = (req, res) => {
     try {
          let data = req.body;
          let age = 1;
          data = data.DOB;

          var date1 = data.split('.')
          var newDate = date1[1] + '/' + date1[0] + '/' + date1[2];
          var date = new Date(newDate);

          date = new Date(date);
          const unixTimestamp = date.getTime() / 1000;

          data = { DOB: data, age: age, timeStamp: unixTimestamp, UTCTime: date }

          trainDB.insertMany(data, (err, data) => {
               if (err) {
                    return res.json({ status: 409, message: 'Error inserting data' + err });
               }
               else {
                    return res.json({ status: 200, message: ' Submitted successfully', data: data });
               }
          })
     } catch {
          return res.json({ status: 404, message: 'Something Went Wrong' });
     }
}