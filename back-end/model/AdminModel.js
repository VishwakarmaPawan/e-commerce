const { func } = require('joi');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "<@PKv#789$on>",
    database: "student_db"
});

connection.connect(function(error){
    if(error){
        console.log('unable to connect database');
    }else {
        console.log('database connected');
    }
});

class AdminModel{
    constructor( ) { }

    insertAdmin(data){
        return new Promise(function(resolve, reject){
            let insert = `INSERT INTO admin(adminName, adminContact, adminId, adminPassword, adminRole) VALUES('${data.adminName}', '${data.adminContact}', '${data.adminID}', '${data.password}', '${data.role}')`;
            connection.query(insert, function(error, result){
                if(error){
                    reject(error)
                }else {
                    resolve(true);
                }
            })
        })
    }

    loginAdmin(id){
        return new Promise(function(resolve, reject){
            let getAdmin = `SELECT * FROM admin WHERE adminId='${id}'`;
            connection.query(getAdmin, function(error, result){
                if(error){
                    reject(error)
                }else {
                    resolve(result[0])
                };
            })
        })
    }

    getAllAdmin(){
        return new Promise(function(resolve, reject){
            let getAdmin = `SELECT * FROM admin WHERE adminRole!='main' AND deleteStatus!='1'`;
            connection.query(getAdmin, function(error, result){
                if(error){
                    reject(error);
                }else {
                    resolve(result);
                }
            })
        })
    }

    deleteadmin(id){
        return new Promise(function(resolve, reject){
            let getadmin = `UPDATE admin SET deleteStatus='1' WHERE id='${id}'`;
            connection.query(getadmin, function(error, result){
                if(error){
                    reject(error)
                }else {
                    resolve(true)
                };
            })
        })
    }

    getSingleAdmin(id){
        return new Promise(function(resolve, reject){
            let getadmin = `SELECT * FROM admin WHERE id='${id}'`;
            connection.query(getadmin, function(error, result){
                if(error){
                    reject(error);
                }else {
                    resolve(result[0])
                };
            })
        })
    }

    blockAdminbyID(id, countdowndate){
        return new Promise(function(resolve, reject){
            let blockadmin = `UPDATE admin SET blockStatus='1', countdowndate='${countdowndate}' WHERE id='${id}'`;
            connection.query(blockadmin, function(error, result){
                if(error){
                    reject(error)
                }else {
                    resolve(true)
                };
            })
        })
    }

    unblockAdmin(id){
        return new Promise(function(resolve, reject){
            let unblockadmin = `UPDATE admin SET blockStatus='0', countdowndate='0' WHERE id='${id}'`;
            connection.query(unblockadmin, function(error, result){
                if(error){
                    reject(error)
                }else {
                    resolve(true)
                };
            })
        })
    }

    insertaddmissionDate(data){
        return new Promise(function(resolve, reject){
            let insertDate = `INSERT INTO event(title, year, startline, deadline) VALUES('${data.yearName}', '${data.year}', '${data.startDate}', '${data.endDate}')`;
            connection.query(insertDate, function(error, result){
                if(error){
                    reject(error)
                }else {
                    resolve(true)
                };
            })
        })
    }

    getAddmissiondeteals(title){
        return new Promise(function(resolve, reject){
            let getdate = `SELECT * FROM event WHERE title='${title}'`;
            connection.query(getdate, function(error, result){
                if(error){
                    reject(error)
                }else {
                    resolve(result)
                };
            })
        })
    }
}

module.exports = new AdminModel();