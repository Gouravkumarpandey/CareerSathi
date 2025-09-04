-- Career Guidance Platform Database Schema

-- Create database
CREATE DATABASE IF NOT EXISTS career_guidance;
USE career_guidance;

-- Students table
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    phone VARCHAR(15),
    grade_level VARCHAR(20),
    interests TEXT,
    skills TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Colleges table
CREATE TABLE colleges (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    location VARCHAR(100),
    type ENUM('Public', 'Private', 'Community') DEFAULT 'Public',
    ranking INT,
    acceptance_rate DECIMAL(5,2),
    tuition_fees DECIMAL(10,2),
    website VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses table
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    duration VARCHAR(50),
    difficulty_level ENUM('Beginner', 'Intermediate', 'Advanced') DEFAULT 'Beginner',
    prerequisites TEXT,
    career_prospects TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Assessments table
CREATE TABLE assessments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    type ENUM('Aptitude', 'Personality', 'Skills') DEFAULT 'Aptitude',
    questions JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Student assessments (results)
CREATE TABLE student_assessments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    assessment_id INT,
    answers JSON,
    score INT,
    results TEXT,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (assessment_id) REFERENCES assessments(id) ON DELETE CASCADE
);

-- Timeline entries
CREATE TABLE timeline_entries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    target_date DATE,
    status ENUM('Pending', 'In Progress', 'Completed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

-- Career recommendations
CREATE TABLE career_recommendations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    recommended_careers JSON,
    generated_by ENUM('AI', 'Manual') DEFAULT 'AI',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX idx_students_email ON students(email);
CREATE INDEX idx_students_username ON students(username);
CREATE INDEX idx_colleges_ranking ON colleges(ranking);
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_timeline_student ON timeline_entries(student_id);
CREATE INDEX idx_assessments_student ON student_assessments(student_id);
