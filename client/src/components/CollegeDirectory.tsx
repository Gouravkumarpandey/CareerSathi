import React, { useState } from 'react';
import { Search, MapPin, Star, DollarSign, Users, Wifi, Home, Book, Award, Filter } from 'lucide-react';

export default function CollegeDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('government');

  const colleges = [
    {
      id: 1,
      name: 'Delhi University - North Campus',
      location: 'Delhi',
      type: 'Government',
      rating: 4.8,
      courses: ['B.Sc Computer Science', 'B.Com', 'BA Economics', 'B.Sc Physics'],
      cutoffs: {
        'B.Sc Computer Science': 95.5,
        'B.Com': 97.2,
        'BA Economics': 96.8
      },
      fees: {
        'B.Sc Computer Science': 15000,
        'B.Com': 12000,
        'BA Economics': 11000
      },
      facilities: ['WiFi', 'Library', 'Hostel', 'Laboratory', 'Sports Complex'],
      mediumOfInstruction: ['English', 'Hindi'],
      totalStudents: 25000,
      placementRate: 85,
      topRecruiters: ['TCS', 'Infosys', 'Deloitte', 'EY'],
      established: 1922
    },
    {
      id: 2,
      name: 'Netaji Subhas University of Technology',
      location: 'Delhi',
      type: 'Government',
      rating: 4.6,
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'MBA'],
      cutoffs: {
        'B.Tech CSE': 92.5,
        'B.Tech ECE': 89.2,
        'B.Tech Mechanical': 87.8
      },
      fees: {
        'B.Tech CSE': 65000,
        'B.Tech ECE': 60000,
        'B.Tech Mechanical': 58000
      },
      facilities: ['WiFi', 'Library', 'Hostel', 'Laboratory', 'Cafeteria', 'Auditorium'],
      mediumOfInstruction: ['English'],
      totalStudents: 8500,
      placementRate: 92,
      topRecruiters: ['Microsoft', 'Amazon', 'Google', 'Samsung'],
      established: 1983
    },
    {
      id: 3,
      name: 'Jawaharlal Nehru University',
      location: 'Delhi',
      type: 'Government',
      rating: 4.9,
      courses: ['MA Political Science', 'PhD International Relations', 'BA(Hons) Foreign Languages'],
      cutoffs: {
        'MA Political Science': 85.0,
        'BA(Hons) Foreign Languages': 82.5
      },
      fees: {
        'MA Political Science': 8000,
        'BA(Hons) Foreign Languages': 6000
      },
      facilities: ['WiFi', 'Library', 'Hostel', 'Cultural Center', 'Sports Complex'],
      mediumOfInstruction: ['English', 'Hindi'],
      totalStudents: 12000,
      placementRate: 78,
      topRecruiters: ['UNESCO', 'Ministry of External Affairs', 'Think Tanks', 'NGOs'],
      established: 1969
    },
    {
      id: 4,
      name: 'Bharati Vidyapeeth University',
      location: 'Mumbai',
      type: 'Government',
      rating: 4.4,
      courses: ['MBBS', 'BDS', 'B.Pharm', 'B.Sc Nursing'],
      cutoffs: {
        'MBBS': 580,
        'BDS': 520,
        'B.Pharm': 75.5
      },
      fees: {
        'MBBS': 125000,
        'BDS': 95000,
        'B.Pharm': 55000
      },
      facilities: ['Hospital', 'Library', 'Hostel', 'Laboratory', 'Research Center'],
      mediumOfInstruction: ['English'],
      totalStudents: 18000,
      placementRate: 88,
      topRecruiters: ['Apollo Hospitals', 'Fortis', 'Max Healthcare', 'Cipla'],
      established: 1964
    }
  ];

  const locations = ['all', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = locationFilter === 'all' || college.location === locationFilter;
    const matchesType = typeFilter === 'all' || college.type.toLowerCase() === typeFilter.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'library': return <Book className="h-4 w-4" />;
      case 'hostel': return <Home className="h-4 w-4" />;
      case 'laboratory': return <Award className="h-4 w-4" />;
      default: return <Award className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">College Directory</h1>
          <p className="text-gray-600">
            Find the best government colleges near you with detailed information
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search colleges or courses..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                className="flex-1 border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
              <select
                className="flex-1 border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="government">Government</option>
                <option value="private">Private</option>
                <option value="all">All Types</option>
              </select>
            </div>
          </div>
        </div>

        {/* College Cards */}
        <div className="space-y-6">
          {filteredColleges.map(college => (
            <div key={college.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{college.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        college.type === 'Government' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {college.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{college.location}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">Est. {college.established}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium">{college.rating}</span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({college.totalStudents.toLocaleString()} students)
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {college.placementRate}% Placement Rate
                    </div>
                  </div>
                </div>

                {/* Courses and Fees */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Popular Courses</h4>
                    <div className="space-y-2">
                      {college.courses.slice(0, 4).map((course, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-gray-700">{course}</span>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-900">
                              ₹{college.fees[course]?.toLocaleString() || 'N/A'}
                            </div>
                            <div className="text-xs text-gray-500">
                              Cut-off: {college.cutoffs[course] || 'N/A'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Facilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {college.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          {getFacilityIcon(facility)}
                          <span className="ml-2">{facility}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Top Recruiters</h5>
                      <div className="flex flex-wrap gap-1">
                        {college.topRecruiters.slice(0, 3).map((recruiter, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {recruiter}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    View Detailed Information
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                    Add to Shortlist
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No colleges found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}