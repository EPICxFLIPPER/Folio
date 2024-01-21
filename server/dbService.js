const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: 'sqluser',
    password: 'password',
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM Teacher;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    async getData(wantedQuery) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = `${wantedQuery}`;

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            //console.log(response);
            return response;

        } catch (error) {
            console.log(error);
        }
    }

    async insertNewSchool(name) {
        try {
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO School (name) VALUES (?);";

                connection.query(query, [name] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                name : name
            };
        } catch (error) {
            console.log(error);
        }
    }

    async insertNewTeacher(name) {
        try {
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO Teacher (name) VALUES (?);";

                connection.query(query, [name] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                name : name
            };
        } catch (error) {
            console.log(error);
        }
    }

    async insertNewClass(teacherId) {
        try {
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO Class (teacherId) VALUES (?);";

                connection.query(query, [teacherId] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                teacherId : teacherId
            };
        } catch (error) {
            console.log(error);
        }
    }

    async insertNewStudent(name, classId) {
        try {
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO Student (name, classId) VALUES (?,?);";

                connection.query(query, [name] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                name : name,
                classId: classId
            };
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DbService;