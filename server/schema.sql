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