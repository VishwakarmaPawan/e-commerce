const express = require('express');
const app = express();
const adminController = require('../controller/AdminController');

app.post('/', adminController.createAdmin);

app.get('/', adminController.getAdminDetealsbyToken)

app.put('/:adminID', adminController.deleteAdmin);

app.put('/block/:adminID', adminController.blockAdmin);

app.put('/unblock/:adminID', adminController.unblockAdmin)

app.post('/login', adminController.adminSignIn);

app.get('/All-Admin', adminController.allAdmin);

app.get('/All-addmissiondata', adminController.getaddmissiondata);

app.get('/:adminID', adminController.getSingleAdmin);

app.post('/insertaddmissiondate', adminController.insertaddmissiondate);



module.exports = app;