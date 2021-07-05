const express = require('express');
const routes = express.Router();
const employeeController = require('../../app/controller/employeeController');
const authenticate = require('../../app/middleware/Auth/authenticate');


routes.post('/api/employee/register',employeeController.employee_register);

routes.post('/api/employee/login',employeeController.employee_login);

routes.get('/api/employee', authenticate, employeeController.get_employess);

routes.get('/api/employee/:id',authenticate,employeeController.get_employee_by_id);

routes.delete('/api/employee/:id',authenticate,employeeController.delete_employee_by_id);

routes.get('*', (req, res)=> {
    res.status(404);
    res.json({'msg':"404 not found"});
    });

module.exports = routes;