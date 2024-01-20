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