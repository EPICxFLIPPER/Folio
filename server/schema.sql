CREATE DATABASE folio;
USE folio;

CREATE TABLE School (
    SchoolId int(11) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL
);

CREATE TABLE Teacher (
    TeacherId int(11) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    SchoolId int(11),
    FOREIGN KEY (SchoolId) REFERENCES School(SchoolId)
);

CREATE TABLE Student (
    StudentId int(11) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    AcademicPerformance varchar(255),
    WeakestSubject varchar(255),
    StrongestSubject varchar(255),
    TeacherId int(11),
    FOREIGN KEY (TeacherId) REFERENCES Teacher(TeacherId)
);

ALTER TABLE Student
ADD absent varchar(255);

CREATE TABLE Class (
    ClassId int(11) PRIMARY KEY AUTO_INCREMENT
);

ALTER TABLE Student ADD ClassId int(11) NOT NULL;
ALTER TABLE Student ADD CONSTRAINT fk_ClassId FOREIGN KEY (ClassId) REFERENCES Class(ClassId);

INSERT INTO School(Name) 
VALUES ("Folio School");

INSERT INTO Teacher(Name, SchoolId) 
VALUES ("Folio Teacher", 1);

ALTER TABLE Class ADD TeacherId int(11) NOT NULL;
ALTER TABLE Class ADD CONSTRAINT fk_TeacherId FOREIGN KEY (TeacherId) REFERENCES Teacher(TeacherId);

ALTER TABLE Student
DROP CONSTRAINT student_ibfk_1;

ALTER TABLE Student
DROP COLUMN TeacherId;

INSERT INTO Student(Name, ClassId) 
VALUES ("James", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Jaymes", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Alec", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Alex", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Mark", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Matthew", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Karen", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Olga", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Kevin", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Kathy", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Cathy", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Kory", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Cory", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Patricia", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Herald", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Sonia", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Gertrude", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Theo", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Elli", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Leo", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Nico", 18);

INSERT INTO Student(Name, ClassId) 
VALUES ("Percy", 18);

