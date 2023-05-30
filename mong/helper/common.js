const jwt = require('jsonwebtoken');


// let decrypt = exports.decrypt = (value) => {
//      let decipher = CryptoJS.AES.decrypt(value, key, { iv: iv });
//      let decrypt_val = decipher.toString(CryptoJS.enc.Utf8);
//      return decrypt_val;
// };

exports.tokenMiddlewareAdmin = (req, res, next) => {
     if (req.headers.authorization) {
          let token = req.headers.authorization;
          if (token != null) {
               let jwtTokenAdmin = 'theeya_oli';
               jwt.verify(token, jwtTokenAdmin, (err, payload) => {
                    if (payload) {
                         let userid = payload;
                         req.userId = userid;
                         next();
                    } else {
                         res.json({ "status": false, "message": "Unauthorized Token" })
                    }
               })
          } else {
               res.json({ "status": false, "message": "Token is Required" })
          }
     } else {
          res.json({ "status": false, "message": "Unauthorized" })
     }
}