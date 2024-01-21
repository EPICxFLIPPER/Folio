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

    async insertNewTeacher(name, schoolId) {
        const schoolIdInt = parseInt(schoolId.value, 10);
        try {
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO Teacher (name, schoolId) VALUES (?,?);";

                connection.query(query, [name, schoolId] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                name : name,
                schoolId : schoolId
            };
        } catch (error) {
            console.log(error);
        }
    }

    async insertNewClass(teacherId) {
        const classIdInt = parseInt(teacherId.value, 10);
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
        const classIdInt = parseInt(classId.value, 10);
        try {
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO Student (name, classId) VALUES (?,?);";

                connection.query(query, [name, classId] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                name : name,
                classId: classIdInt
            };
        } catch (error) {
            console.log(error);
        }
    }

    async deleteSchoolById(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM School WHERE SchoolId = (?);";
    
                connection.query(query, [id] , (err, result) => {
                    if (err) {
                        if (err === 'ER_ROW_IS_REFERENCED_2') {
                            console.error("Cannot delete School due to foreign key constraint");
                            resolve(0);
                        } else {
                            reject(new Error(err.message));
                        }
                    } else {
                        resolve(result.affectedRows || 0);
                    }
                });
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteTeacherById(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM Teacher WHERE TeacherId = (?);";

                connection.query(query, [id] , (err, result) => {
                    if (err) {
                        if (err === 'ER_ROW_IS_REFERENCED_2') {
                            console.error("Cannot delete teacher due to foreign key constraint");
                            resolve(0);
                        } else {
                            reject(new Error(err.message));
                        }
                    } else {
                        resolve(result.affectedRows || 0);
                    }
                });
            });
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteClassById(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM Class WHERE ClassId = (?);";
    
                connection.query(query, [id] , (err, result) => {
                    if (err) {
                        if (err === 'ER_ROW_IS_REFERENCED_2') {
                            console.error("Cannot delete Class due to foreign key constraint");
                            resolve(0);
                        } else {
                            reject(new Error(err.message));
                        }
                    } else {
                        resolve(result.affectedRows || 0);
                    }
                });
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteStudentById(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM Student WHERE StudentId = (?);";
    
                connection.query(query, [id] , (err, result) => {
                    if (err) {
                        if (err === 'ER_ROW_IS_REFERENCED_2') {
                            console.error("Cannot delete Student due to foreign key constraint");
                            resolve(0);
                        } else {
                            reject(new Error(err.message));
                        }
                    } else {
                        resolve(result.affectedRows || 0);
                    }
                });
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async editStudentById(id,academicPerformance,weakestSubject,strongestSubject,absent) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE Student SET AcademicPerformance = (?), WeakestSubject = (?), StrongestSubject = (?), Absent = (?),  WHERE id = (?);";
                connection.query(query, [academicPerformance,weakestSubject,strongestSubject,absent, id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async editStudentById() {
        
    }
}

module.exports = DbService;