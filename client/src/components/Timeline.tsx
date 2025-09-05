import React, { useState } from 'react';
import { Calendar, Clock, Bell, Filter, AlertCircle, CheckCircle, BookOpen, GraduationCap } from 'lucide-react';

export default function Timeline() {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const events = [
    {
      id: 1,
      title: 'DU Admission Forms Open',
      description: 'Delhi University undergraduate admission forms are now available online',
      date: new Date('2024-05-15'),
      type: 'admission',
      isImportant: true,
      deadline: new Date('2024-06-30'),
      status: 'upcoming',
      institution: 'Delhi University',
      documents: ['Class 12 Marksheet', 'Transfer Certificate', 'Category Certificate']
    },
    {
      id: 2,
      title: 'JEE Main Registration',
      description: 'Joint Entrance Examination Main registration for engineering admissions',
      date: new Date('2024-04-30'),
      type: 'exam',
      isImportant: true,
      deadline: new Date('2024-05-20'),
      status: 'active',
      institution: 'NTA',
      documents: ['Class 12 Marksheet', 'Passport Size Photo', 'Signature']
    },
    {
      id: 3,
      title: 'State Merit Scholarship Application',
      description: 'Apply for state government merit-based scholarship for higher education',
      date: new Date('2024-06-01'),
      type: 'scholarship',
      isImportant: false,
      deadline: new Date('2024-07-15'),
      status: 'upcoming',
      institution: 'State Government',
      documents: ['Income Certificate', 'Caste Certificate', 'Academic Records']
    },
    {
      id: 4,
      title: 'NEET Counseling Begins',
      description: 'Medical college admission counseling process starts for NEET qualified candidates',
      date: new Date('2024-07-10'),
      type: 'counseling',
      isImportant: true,
      deadline: new Date('2024-08-30'),
      status: 'upcoming',
      institution: 'MCC',
      documents: ['NEET Scorecard', 'Domicile Certificate', 'Medical Certificate']
    },
    {
      id: 5,
      title: 'CLAT Application Deadline',
      description: 'Last date to apply for Common Law Admission Test for law colleges',
      date: new Date('2024-05-31'),
      type: 'exam',
      isImportant: true,
      deadline: new Date('2024-05-31'),
      status: 'urgent',
      institution: 'Consortium of NLUs',
      documents: ['Class 12 Certificate', 'ID Proof', 'Photo']
    },
    {
      id: 6,
      title: 'IPU CET Registration',
      description: 'Guru Gobind Singh Indraprastha University Common Entrance Test registration',
      date: new Date('2024-06-15'),
      type: 'exam',
      isImportant: false,
      deadline: new Date('2024-07-01'),
      status: 'upcoming',
      institution: 'IP University',
      documents: ['Academic Certificates', 'Category Certificate', 'Photo']
    }
  ];

  const months = [
    'all', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const types = ['all', 'admission', 'exam', 'scholarship', 'counseling'];

  const filteredEvents = events.filter(event => {
    const matchesMonth = selectedMonth === 'all' || 
                        event.date.toLocaleString('default', { month: 'long' }) === selectedMonth;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesMonth && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent': return 'text-red-600 bg-red-100';
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'upcoming': return 'text-green-600 bg-green-100';
      case 'completed': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'admission': return <GraduationCap className="h-5 w-5" />;
      case 'exam': return <BookOpen className="h-5 w-5" />;
      case 'scholarship': return <AlertCircle className="h-5 w-5" />;
      case 'counseling': return <CheckCircle className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  const getDaysUntilDeadline = (deadline: Date) => {
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Timeline Tracker</h1>
          <p className="text-gray-600">
            Never miss important deadlines for admissions, exams, and scholarships
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Month</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {months.map(month => (
                  <option key={month} value={month}>
                    {month === 'all' ? 'All Months' : month}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Timeline Events */}
        <div className="space-y-6">
          {filteredEvents.map(event => {
            const daysUntilDeadline = getDaysUntilDeadline(event.deadline);
            const statusColor = getStatusColor(event.status);
            const typeIcon = getTypeIcon(event.type);
            
            return (
              <div 
                key={event.id} 
                className={`bg-white rounded-lg shadow-sm border-l-4 ${
                  event.isImportant ? 'border-red-500' : 'border-blue-500'
                } p-6 hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-blue-100 rounded-full p-2">
                          {typeIcon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                          {event.isImportant && (
                            <Bell className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Start: {event.date.toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            Deadline: {event.deadline.toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <GraduationCap className="h-4 w-4 mr-2" />
                            {event.institution}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Required Documents */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Required Documents</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.documents.map((doc, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Status and Actions */}
                  <div className="lg:ml-6 lg:text-right">
                    <div className="flex lg:flex-col gap-3 items-start">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                      
                      {daysUntilDeadline >= 0 && (
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${
                            daysUntilDeadline <= 7 ? 'text-red-600' : 
                            daysUntilDeadline <= 14 ? 'text-orange-600' : 'text-green-600'
                          }`}>
                            {daysUntilDeadline}
                          </div>
                          <div className="text-xs text-gray-500">days left</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex lg:flex-col gap-2 mt-4">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                        Apply Now
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}