const axios = require('axios');

class userController{
    constructor(){

    }

    userHomePage(req, res){
        let Data = {
            pagetitle: "Home page",
            pageName: "dashboard",
            isuserLoggedin: req.isuserLoggedin,
            loggedInUser: req.loggedInUserData,
        }
        res.render('template', Data);
    }

    signupPage(req, res){
        let Data = {
            pagetitle: "sign up portal",
            pageName: "signUp",
            isuserLoggedin: req.isuserLoggedin,
            loggedInUser: req.loggedInUserData,
            message: "",
            status: "",
            bodydata: "",
        };
        if(req.session.status && req.session.message && req.session.enteredData){
            Data.status = req.session.status;
            Data.message = req.session.message;
            Data.bodydata = req.session.enteredData;
            delete req.session.status, req.session.message, req.session.enteredData;
        };
        res.render('template', Data);
    }

    async resisterStudent(req, res){
        console.log('req.body', req.body);
        const endpoint = `http://localhost:3004/user`;
        const bodydata = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fatherName: req.body.fatherName,
            motherName: req.body.motherName,
            age: req.body.age,
            dob: req.body.dob,
            gender: req.body.gender,
            category: req.body.category,
            destrict: req.body.destrict,
            city: req.body.city,
            class: req.body.class,
            previousclass: req.body.previousclass,
            persentage: req.body.parsentage,
            marks: req.body.marks,
            year: req.body.year,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,
        }
        let response = await axios.post(endpoint, bodydata);
        console.log('response', response);
        if(response && response.status == 200){
            res.redirect('/succesedsignup');
        }else {
            req.session.status = "Error";
            req.session.message = response.data.message;
            req.session.enteredData = bodydata;
            res.redirect('sign-up');
        }
    }

    loginPage(req, res){
        let Data = {
            pagetitle: "log in portal",
            pageName: "signIn",
            isuserLoggedin: req.isuserLoggedin,
            loggedInUser: req.loggedInUserData,
            status: "",
            message: "",
        }
        if(req.session.status && req.session.message){
            Data.status = req.session.status;
            Data.message = req.session.message;
            delete req.session.status, req.session.message;
        }
        res.render('template', Data);
    }

    async signInuser(req, res){
        console.log('req.body', req.body);
        let endpoint = `http://localhost:3004/user/login`;
        let bodydata = {
            email : req.body.email,
            password : req.body.password
        };
        let response = await axios.post(endpoint, bodydata);
        console.log('response', response);
        if(response && response.status == 203){
            req.session.status = "Error";
            req.session.message = response.data.message;
            res.redirect('/sign-in')
        } else {
            const token = response.data.data;
            console.log('token', token);
            res.cookie('token', token)
            res.redirect('/');
        }
    }

    userProfile(req, res){
        let Data = {
            pagetitle: "Student profile",
            pageName: "profiledeteals",
            isuserLoggedin: req.isuserLoggedin,
            loggedInUser: req.loggedInUserData,
        };
        res.render('template', Data);
    };

    gamespage(req, res){
        let Data = {
            pagetitle: "Games",
            pageName: "games",
            isuserLoggedin: req.isuserLoggedin,
            loggedInUser: req.loggedInUserData,
        }
        res.render('template', Data);
    }

    picnicpage(req, res){
        let Data = {
            pagetitle: "Picnic",
            pageName: "picnic",
            isuserLoggedin: req.isuserLoggedin,
            loggedInUser: req.loggedInUserData,
        };
        res.render('template', Data);
    }

    activities(req, res){
        let Data = {
            pagetitle: "Student Activities",
            pageName: "activities",
            isuserLoggedin: req.isuserLoggedin,
            loggedInUser: req.loggedInUserData,
        }
        res.render('template', Data);
    }

    successedSignUp(req, res){
        let Data = {
            pagetitle: "successed",
            pageName: "successed",
            isuserLoggedin: req.isuserLoggedin,
        }
        res.render('template', Data);
    }
};

module.exports = new userController();