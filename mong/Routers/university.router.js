const express = require('express');
const universityRouter = express.Router();
const universityController = require('../Controllers/university.Controller.js');

universityRouter.post('/universitySubmit', universityController.universitySubmit);
universityRouter.get('/getUniversity', universityController.getUniversity);

universityRouter.post('/getUniversityByLocation', universityController.getUniversityByLocation);
universityRouter.post('/getUniversityDocumentsCount', universityController.getUniversityDocumentsCount);
universityRouter.post('/getStudentsPerList', universityController.getStudentsPerList);
universityRouter.get('/getStudentsCount', universityController.getStudentsCount);

module.exports = universityRouter;