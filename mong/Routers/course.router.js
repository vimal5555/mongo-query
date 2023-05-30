const express = require('express');
const courseRouter = express.Router();
const courseController = require('../Controllers/course.Controller.js');

courseRouter.post('/courseSubmit', courseController.courseSubmit);
courseRouter.get('/getCourse', courseController.getCourse);


module.exports = courseRouter;