const axios = require('axios');

class AdminController{
    constructor() {}

    admindashboardpage(req, res){
        let Data = {
            pagetitle: "Admin : Home page",
            pageName: "dashboard",
            isAdminLoggedIn: req.isAdminLoggedin,
            isAdminLoggedInData: req.loggedInAdminData,
        };
        res.render('admin/template', Data);
    }

    picnicAndtoor(req, res){
        let Data = {
            pagetitle: "Admin : picnic",
            pageName: "picnic",
            isAdminLoggedIn: req.isAdminLoggedin,
            isAdminLoggedInData: req.loggedInAdminData,
        };
        res.render('admin/template', Data);
    }

    async loginAdmin(req, res){
        console.log('req.body', req.body);
        const endPoint = `http://localhost:3004/admin/login`;
        let bodydata = {
            id : req.body.id,
            password : req.body.password
        };
        let response = await axios.post(endPoint, bodydata);
        console.log('response', response);
        if(response && response.status == 203){
            req.session.status = "Error";
            req.session.message = response.data.message;
            res.redirect('admin/template')
        } else {
            const Token = response.data.data;
            console.log('token', Token);
            res.cookie('token', Token);
            res.redirect('/admin');
        };
    }

    async Addnewadmin(req, res){
        let Data = {
            pagetitle: "Admin : new Admin",
            pageName: "NewAdmin",
            isAdminLoggedIn: req.isAdminLoggedin,
            isAdminLoggedInData: req.loggedInAdminData,
            message: "",
            adminmessage: "",
            adminStatus: "",
            status: "",
            id: "",
            password: "",
            adminlist: "",
            bstatus: "",
            bmessage: "",
        };
        if(req.session.status && req.session.message){
            Data.status = req.session.status;
            Data.message = req.session.message;
            delete req.session.status, req.session.message;
        }
        if(req.session.status && req.session.adminId && req.session.adminPassword){
            Data.status = req.session.status;
            Data.id = req.session.adminId;
            Data.password = req.session.adminPassword;
            delete req.session.status, req.session.adminId, req.session.adminPassword;
        }
        if(req.session.message && req.session.adminstatus){
            Data.adminStatus = req.session.adminstatus;
            Data.adminmessage = req.session.message;
            delete req.session.message, req.session.adminStatus;
        }
        if(req.session.bstatus && req.session.bmessage){
            Data.bstatus = req.session.bstatus;
            Data.bmessage = req.session.bmessage;
            delete req.session.bstatus, req.session.bmessage;
        }
        const endPoint = `http://localhost:3004/admin/All-Admin`;
        let result = await axios.get(endPoint);
        console.log('result',result);
        console.log('result', result.data.length);
        for(let i = 0; i < result.data.length; i++){
            const now = new Date().getTime();
            console.log('now', now);
            if(result.data[i].blockStatus == 1){
                if(result.data[i].countdowndate < now){
                    console.log('result.data[i].id', result.data[i].id);
                    const adminId = result.data[i].id;
                    const endpoint = `http://localhost:3004/admin/unblock/${adminId}`;
                    let unblockresult = await axios.put(endpoint);
                    console.log(unblockresult.data.message, adminId);
                }
            }
        }
        let afterUnblockResult = await axios.get(endPoint);
        Data.adminlist = afterUnblockResult.data;
        res.render('admin/template', Data);
    }

    async createAdminByMainAdmin(req, res){
        console.log('req.body', req.body);
        let endPoint = `http://localhost:3004/admin`;
        let bodyData = {
            adminName: req.body.fullName,
            adminContact: req.body.contact,
        }
        let result = await axios.post(endPoint, bodyData);
        console.log('result', result);
        if(result && result.status == 203){
           req.session.status = "Error";
           req.session.message = result.data.message;
           res.redirect('/admin/add-new-admin') 
        }else {
            req.session.status = "success";
            req.session.adminId = result.data.Id;
            req.session.adminPassword = result.data.Password;
            res.redirect('/admin/add-new-admin');
        }
    }

    async deleteSingleAdmin(req, res){
        console.log('req.query', req.query);
        let id = req.query.AdminId;
        let endPoint = `http://localhost:3004/admin/${id}`;
        let result = await axios.put(endPoint);
        console.log('result', result);
        if(result && result.status == 200){
            req.session.adminstatus = "success"
            req.session.message = "Admin deleted";
            res.redirect('/admin/add-new-admin');
        }else {
            res.redirect('/admin/add-new-admin');
        }
    }

    async blockSingleAdmin(req, res){
        console.log('req.query', req.query);
        let id = req.query.AdminId;
        console.log('id', id);
        let endpoint = `http://localhost:3004/admin/${id}`;
        let result = await axios.get(endpoint);
        console.log('result', result);
        let admin = result.data;
        res.json(admin);
    }

    async blockAdminById(req, res){
        console.log('req.body', req.body);
        let time = req.body.date;
        const adminID = req.body.adminid;
        let countdowndate = new Date(time).getTime();
        let now = new Date().getTime();
        if(countdowndate > now){
            console.log('pawan vishwakarma')
            let endPoint = `http://localhost:3004/admin/block/${adminID}`;
            const bodyData = {
                countdowndate: countdowndate
            }
            const result = await axios.put(endPoint, bodyData);
            console.log('result', result);
            if(result && result.status == 200){
                res.redirect('/admin/add-new-admin');
            }else {
                req.session.bstatus = "Error";
                req.session.bmessage = "failed";
                res.redirect('/admin/add-new-admin');
            }
        }else {
            req.session.bstatus = "Error";
            req.session.bmessage = "please enter valid Time";
            res.redirect('/admin/add-new-admin')
        }
        console.log('time', countdowndate);
    }

    async blockedAdmin(req, res){
        let Data = {
            pagetitle: "blocked Admin",
            pageName: "blocked-admin",
            isAdminLoggedIn: req.isAdminLoggedin,
            isAdminLoggedInData: req.loggedInAdminData,
        }
        console.log('req.query', req.query);
        const adminid = req.query.AdminID;
        let endpoint = `http://localhost:3004/admin/${adminid}`;
        const result = await axios.get(endpoint);
        console.log('result', result);
        if(result && result.status == 200){
            Data.admin = result.data;
        }
        res.render('admin/template', Data);
    }

    async deleteCookie(req, res){
        let data = req.loggedInAdminData;
        let id = data.id;
        const now = new Date().getTime();
        if(data.blockStatus == 1){
            if(data.countdowndate < now){
                const endpoint = `http://localhost:3004/admin/unblock/${id}`;
                await axios.put(endpoint);
                res.clearCookie('token');
                res.redirect('/admin');
            }else {
                res.redirect('/admin');
            }
        }else {
            res.clearCookie('token');
            res.redirect('/admin');
        }
    }

    async unblockAdminInMidTime(req, res){
        console.log('req.query', req.query);
        let adminid = req.query.adminID;
        console.log('adminid', adminid);
        const endpoint = `http://localhost:3004/admin/${adminid}`;
        const result = await axios.get(endpoint);
        console.log('result', result);
        if(result.data.blockStatus == 1){
            const endPoint = `http://localhost:3004/admin/unblock/${adminid}`;
            await axios.put(endPoint);
            res.redirect('/admin/add-new-admin');
        }
    }

    localAdminProfile(req, res){
        let Data = {
            pagetitle: "Profile",
            pageName: "local-Admin-Profile",
            isAdminLoggedIn: req.isAdminLoggedin,
            isAdminLoggedInData: req.loggedInAdminData,
        };
        res.render('admin/template', Data);
    }

    async student(req, res){
        let Data = {
            pagetitle: "Students",
            pageName: "students",
            isAdminLoggedIn: req.isAdminLoggedin,
            isAdminLoggedInData: req.loggedInAdminData,
        };
        const endPoint = `http://localhost:3004/user/all-user`;
        const result = await axios.get(endPoint);
        console.log('result', result)
        if(result && result.status == 200){
            Data.students = result.data.data;
        }
        res.render('admin/template', Data);
    }


    async getsingleStudentDeteals(req, res){
        let Data = {
            pagetitle: "Student",
            pageName: "single-student",
            isAdminLoggedIn: req.isAdminLoggedin,
            isAdminLoggedInData: req.loggedInAdminData,
        };
        console.log('req.query', req.query);
        const studentId = req.query.studentID;
        let endpoint = `http://localhost:3004/user/single-user/${studentId}`;
        const result = await axios.get(endpoint);
        console.log('result' , result);
        Data.student = result.data;
        console.log('data.student', Data.student);
        res.render('admin/template', Data);
    }


    async addmissionNews(req, res){
        let Data = {
            pagetitle: "Addmission Deteals",
            pageName: "addmission",
            isAdminLoggedIn: req.isAdminLoggedin,
            isAdminLoggedInData: req.loggedInAdminData,
            messagedate: "",
            message: "",
        }
        //panding work create API addmission date
        if(req.session.messagedate){
            Data.messagedate = req.session.messagedate;
            delete req.session.messagedate;
        };
        if(req.session.message){
            Data.message = req.session.message;
            delete req.session.message;
        }
        res.render('admin/template', Data);
    }

    async addmissiondatealot(req, res){
        console.log('req.body', req.body)
        const sd = req.body.startdate;
        const ld = req.body.lastdate;
        const tdt = 72 * 60 * 60 * 1000
        const sdt = new Date(sd).getTime();
        const ldt = new Date(ld).getTime();
        const cdt = new Date().getTime();
        const sdttdt = sdt + tdt;
        console.log('sdttdt', sdttdt)

        if(sdt >= cdt){
            if(ldt >= sdttdt){
                //panding work create API insert addmission deteals
                const endpoint = `http://localhost:3004/admin/insertaddmissiondate`;
                const bodyData = {
                    academicyearName: req.body.academicYearName,
                    academicyear: req.body.year,
                    startDate: req.body.startdate,
                    endDate: req.body.lastdate
                };
                let result = await axios.post(endpoint, bodyData);
                console.log('result', result);
                if(result && result.status == 200){
                    req.session.messagedate = 'Addmission date is available';
                    res.redirect('/admin/addmission')
                }
            }else {
                req.session.message = "Start date and last date 3 days interval compulsury"
                res.redirect('/admin/addmission');
            }
        }else {
            req.session.message = "please enter a valid start date"
            res.redirect('/admin/addmission');
        }
    }
}

module.exports = new AdminController();