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

class UserModel{
    constructor() {}

    insertUser(data){
        return new Promise(function(resolve, reject){
            let insertuser = `INSERT INTO users(firstName, lastName, fatherName, motherName, age, dob, gender, category, destrict, city, class, previousclass, persentage, marks, year, email, contact, password) VALUES('${data.firstName}', '${data.lastName}', '${data.fatherName}', '${data.motherName}', '${data.age}', '${data.dob}', '${data.gender}', '${data.category}', '${data.destrict}', '${data.city}', '${data.class}', '${data.previousclass}', '${data.persentage}', '${data.marks}', '${data.year}', '${data.email}', '${data.contact}', '${data.password}')`;
            connection.query(insertuser, function(error, result){
                if(error){
                    reject(error);
                }else {
                    resolve(true);
                };
            });
        });
    };

    getuserdata(email){
        return new Promise(function(resolve, reject){
            let getuser = `SELECT * FROM users WHERE email='${email}'`;
            connection.query(getuser, function(error, result){
                if(error){
                    reject(error);
                }else {
                    resolve(result[0]);
                };
            });
        });
    }

    getalluser(){
        return new Promise(function(resolve, reject){
            let getalluser = `SELECT * FROM users`;
            connection.query(getalluser, function(error, result){
                if(error){
                    reject(error)
                }else {
                    resolve(result)
                };
            })
        })
    }

    getSingleUser(id){
        return new Promise(function(resolve, reject){
            let getuser = `SELECT * FROM users WHERE id='${id}'`;
            connection.query(getuser, function(error, result){
                if(error){
                    reject(error)
                }else {
                    resolve(result[0])
                };
            })
        })
    }
}

module.exports = new UserModel();