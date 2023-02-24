const express = require('express');
const app = express();
const adminController = require('../controller/AdminController');
const middilewere = require('../middleware/middilewere');

app.get('/', middilewere.checkbackdoorentryAdmin, adminController.admindashboardpage);

app.get('/unblock-admin', adminController.unblockAdminInMidTime);

app.get('/profile', middilewere.checkbackdoorentryAdmin, adminController.localAdminProfile)

app.get('/delete-cookie', middilewere.checkbackdoorentryAdmin, adminController.deleteCookie)

app.get('/blocked-admin', middilewere.checkbackdoorentryAdmin, adminController.blockedAdmin)

app.post('/block-admin-by-id', adminController.blockAdminById)

app.get('/picnic', middilewere.checkbackdoorentryAdmin, adminController.picnicAndtoor);

app.get('/add-new-admin', middilewere.checkbackdoorentryAdmin, adminController.Addnewadmin)

app.post('/login', adminController.loginAdmin);

app.post('/create-admin', adminController.createAdminByMainAdmin);

app.get('/delete-admin', adminController.deleteSingleAdmin);

app.get('/block-admin', adminController.blockSingleAdmin);

app.get('/student', middilewere.checkbackdoorentryAdmin, adminController.student)

app.get('/student-deteals', middilewere.checkbackdoorentryAdmin, adminController.getsingleStudentDeteals);

app.get('/addmission', middilewere.checkbackdoorentryAdmin, adminController.addmissionNews);

app.post('/addmissiondatealot', adminController.addmissiondatealot)

module.exports = app;