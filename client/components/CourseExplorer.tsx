import React, { useState } from 'react';
import { Search, Filter, TrendingUp, DollarSign, Clock, Users, ChevronRight, Star } from 'lucide-react';
import './CourseExplorer.css';

export default function CourseExplorer() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Courses', count: 45 },
    { id: 'science', name: 'Science', count: 12 },
    { id: 'commerce', name: 'Commerce', count: 8 },
    { id: 'arts', name: 'Arts', count: 10 },
    { id: 'vocational', name: 'Vocational', count: 15 }
  ];

  const courses = [
    {
      id: 1,
      name: 'Computer Science Engineering',
      category: 'science',
      duration: '4 years',
      averageSalary: '₹8-25 LPA',
      description: 'Learn programming, software development, AI, and emerging technologies.',
      rating: 4.8,
      enrolledStudents: 12500,
      topColleges: ['IIT Delhi', 'NSIT', 'DTU'],
      careerPaths: [
        'Software Engineer',
        'Data Scientist',
        'Product Manager',
        'AI Specialist'
      ],
      governmentExams: ['GATE', 'UGC NET', 'ISRO Scientist'],
      skills: ['Programming', 'Problem Solving', 'Mathematics', 'Logic']
    },
    {
      id: 2,
      name: 'Bachelor of Commerce',
      category: 'commerce',
      duration: '3 years',
      averageSalary: '₹4-12 LPA',
      description: 'Foundation in business, accounting, finance, and economics.',
      rating: 4.5,
      enrolledStudents: 18700,
      topColleges: ['SRCC', 'LSR', 'Hindu College'],
      careerPaths: [
        'Chartered Accountant',
        'Financial Analyst',
        'Business Consultant',
        'Investment Banker'
      ],
      governmentExams: ['UPSC', 'Banking Exams', 'CA', 'CS'],
      skills: ['Analytical Thinking', 'Communication', 'Mathematics', 'Business Acumen']
    },
    {
      id: 3,
      name: 'Psychology',
      category: 'arts',
      duration: '3 years',
      averageSalary: '₹3-10 LPA',
      description: 'Study human behavior, mental processes, and therapeutic techniques.',
      rating: 4.6,
      enrolledStudents: 8900,
      topColleges: ['JNU', 'BHU', 'Jamia Millia'],
      careerPaths: [
        'Clinical Psychologist',
        'Counselor',
        'HR Specialist',
        'Research Scientist'
      ],
      governmentExams: ['UGC NET', 'UPSC', 'State PSC'],
      skills: ['Empathy', 'Communication', 'Research', 'Critical Thinking']
    },
    {
      id: 4,
      name: 'Mechanical Engineering',
      category: 'science',
      duration: '4 years',
      averageSalary: '₹6-20 LPA',
      description: 'Design and manufacture machines, engines, and mechanical systems.',
      rating: 4.7,
      enrolledStudents: 15200,
      topColleges: ['IIT Bombay', 'NIT Trichy', 'BITS Pilani'],
      careerPaths: [
        'Mechanical Engineer',
        'Project Manager',
        'Design Engineer',
        'Manufacturing Engineer'
      ],
      governmentExams: ['GATE', 'UPSC Engineering Services', 'ISRO'],
      skills: ['Problem Solving', 'Mathematics', 'Design Thinking', 'Technical Analysis']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h1>
          <p className="text-gray-600">
            Discover your perfect course with detailed career paths and opportunities
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses, careers, or skills..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              {/* Course Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-gray-700 ml-1">{course.rating}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Duration</p>
                    <p className="text-sm font-medium">{course.duration}</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Avg. Salary</p>
                    <p className="text-sm font-medium">{course.averageSalary}</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Enrolled</p>
                    <p className="text-sm font-medium">{course.enrolledStudents.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Career Paths */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Top Career Paths</h4>
                <div className="flex flex-wrap gap-2">
                  {course.careerPaths.slice(0, 3).map((path, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {path}
                    </span>
                  ))}
                  {course.careerPaths.length > 3 && (
                    <span className="text-blue-600 text-xs font-medium">
                      +{course.careerPaths.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Skills Required */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                  View Detailed Career Path
                  <ChevronRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}