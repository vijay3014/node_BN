const express = require('express');
const ProjectRoutes = express.Router();

const {addProject, getAllProject, getProject, updateProduct} = require('../controller/project.controller');

ProjectRoutes.post('/add-Project', addProject);
ProjectRoutes.get('/get-all-Project', getAllProject);
ProjectRoutes.get('/get-Project', getProject);
ProjectRoutes.put('/put-Project', updateProduct); 

module.exports = ProjectRoutes;