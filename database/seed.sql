-- Sample data for Career Guidance Platform

USE career_guidance;

-- Insert sample students
INSERT INTO students (username, email, password_hash, first_name, last_name, grade_level, interests, skills) VALUES
('john_doe', 'john@example.com', '$2b$10$hashed_password_here', 'John', 'Doe', '12th Grade', 'Technology, Programming', 'JavaScript, Python, Problem Solving'),
('jane_smith', 'jane@example.com', '$2b$10$hashed_password_here', 'Jane', 'Smith', '11th Grade', 'Medicine, Biology', 'Research, Analysis, Communication'),
('alex_wilson', 'alex@example.com', '$2b$10$hashed_password_here', 'Alex', 'Wilson', '10th Grade', 'Art, Design', 'Creative Design, Adobe Suite, Drawing');

-- Insert sample colleges
INSERT INTO colleges (name, location, type, ranking, acceptance_rate, tuition_fees, website, description) VALUES
('MIT', 'Cambridge, MA', 'Private', 1, 4.1, 58240, 'https://mit.edu', 'Leading technology institute'),
('Stanford University', 'Stanford, CA', 'Private', 2, 3.9, 56169, 'https://stanford.edu', 'Top research university'),
('Harvard University', 'Cambridge, MA', 'Private', 3, 3.4, 57261, 'https://harvard.edu', 'Prestigious Ivy League university'),
('UC Berkeley', 'Berkeley, CA', 'Public', 22, 14.5, 14254, 'https://berkeley.edu', 'Top public research university'),
('Community College of Denver', 'Denver, CO', 'Community', NULL, 85.0, 4500, 'https://ccd.edu', 'Affordable community college option');

-- Insert sample courses
INSERT INTO courses (title, category, description, duration, difficulty_level, prerequisites, career_prospects) VALUES
('Computer Science Fundamentals', 'Technology', 'Introduction to programming and computer science concepts', '4 months', 'Beginner', 'Basic Mathematics', 'Software Developer, Data Analyst, IT Specialist'),
('Advanced Biology', 'Science', 'In-depth study of biological systems and processes', '6 months', 'Intermediate', 'Biology Basics, Chemistry', 'Doctor, Research Scientist, Biotechnologist'),
('Digital Art and Design', 'Arts', 'Creative digital design using modern tools', '3 months', 'Beginner', 'Basic Computer Skills', 'Graphic Designer, UI/UX Designer, Digital Artist'),
('Business Administration', 'Business', 'Fundamentals of business management and operations', '8 months', 'Intermediate', 'Basic Economics', 'Business Manager, Entrepreneur, Consultant'),
('Data Science with Python', 'Technology', 'Learn data analysis and machine learning with Python', '6 months', 'Advanced', 'Python Programming, Statistics', 'Data Scientist, ML Engineer, Business Analyst');

-- Insert sample assessments
INSERT INTO assessments (title, description, type, questions) VALUES
('Career Interest Assessment', 'Discover your career interests and preferences', 'Personality', 
'[
  {"question": "I enjoy working with technology", "type": "scale", "scale": 5},
  {"question": "I prefer working alone vs in teams", "type": "choice", "options": ["Alone", "Teams", "Both"]},
  {"question": "Which environment appeals to you more?", "type": "choice", "options": ["Office", "Outdoors", "Laboratory", "Creative Studio"]}
]'),

('Aptitude Test - Logical Reasoning', 'Test your logical reasoning abilities', 'Aptitude',
'[
  {"question": "If A=1, B=2, C=3, what is the sum of A+B+C?", "type": "number", "answer": 6},
  {"question": "Complete the pattern: 2, 4, 8, 16, ?", "type": "number", "answer": 32},
  {"question": "Which word does not belong: Apple, Orange, Banana, Carrot", "type": "choice", "options": ["Apple", "Orange", "Banana", "Carrot"], "answer": "Carrot"}
]');

-- Insert sample timeline entries
INSERT INTO timeline_entries (student_id, title, description, target_date, status) VALUES
(1, 'Complete College Applications', 'Submit applications to target colleges', '2024-12-01', 'In Progress'),
(1, 'Take SAT Exam', 'Schedule and take SAT examination', '2024-10-15', 'Pending'),
(2, 'Volunteer at Hospital', 'Gain experience in medical field', '2024-09-30', 'In Progress'),
(3, 'Build Art Portfolio', 'Create portfolio for college applications', '2024-11-15', 'Pending');

-- Insert sample career recommendations
INSERT INTO career_recommendations (student_id, recommended_careers, generated_by) VALUES
(1, '[
  {"career": "Software Developer", "match": 95, "description": "Develop software applications"},
  {"career": "Data Scientist", "match": 88, "description": "Analyze data to derive insights"},
  {"career": "Cybersecurity Analyst", "match": 82, "description": "Protect systems from security threats"}
]', 'AI'),
(2, '[
  {"career": "Medical Doctor", "match": 92, "description": "Provide medical care to patients"},
  {"career": "Research Scientist", "match": 85, "description": "Conduct scientific research"},
  {"career": "Pharmacist", "match": 78, "description": "Dispense medications and provide drug information"}
]', 'AI');
