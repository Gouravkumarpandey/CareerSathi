import React from 'react';
import { TrendingUp, BookOpen, MapPin, Calendar, Award, AlertCircle } from 'lucide-react';

interface DashboardProps {
  user: { name: string; class: string; interests: string[] } | null;
  onNavigate: (tab: string) => void;
}

export default function Dashboard({ user, onNavigate }: DashboardProps) {
  const recommendations = [
    {
      type: 'course',
      title: 'Computer Science Engineering',
      reason: 'Based on your interest in technology and problem-solving',
      match: 92
    },
    {
      type: 'course',
      title: 'Business Administration',
      reason: 'Aligned with your leadership skills and communication abilities',
      match: 87
    },
    {
      type: 'college',
      title: 'Delhi University - North Campus',
      reason: 'Top-rated government college with excellent CS program',
      match: 94
    }
  ];

  const upcomingDeadlines = [
    { title: 'DU Admission Forms', date: '2024-05-15', daysLeft: 12 },
    { title: 'JEE Main Registration', date: '2024-04-30', daysLeft: 8 },
    { title: 'State Scholarship Application', date: '2024-06-01', daysLeft: 28 }
  ];

  const quickStats = [
    { label: 'Assessment Score', value: '85%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Courses Explored', value: '12', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Colleges Shortlisted', value: '8', icon: MapPin, color: 'text-purple-600' },
    { label: 'Applications Pending', value: '3', icon: AlertCircle, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name || 'Student'}!
          </h1>
          <p className="text-gray-600">
            Here's your personalized guidance dashboard for making informed educational decisions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personalized Recommendations */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Personalized Recommendations
                </h2>
                <button
                  onClick={() => onNavigate('assessment')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Retake Assessment
                </button>
              </div>
              
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {rec.match}% match
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{rec.reason}</p>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Learn More →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Deadlines</h2>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{deadline.title}</p>
                      <p className="text-xs text-gray-500">{deadline.date}</p>
                    </div>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      {deadline.daysLeft} days
                    </span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => onNavigate('timeline')}
                className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium text-center"
              >
                View All Events →
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('assessment')}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium">Take Assessment</span>
                  </div>
                </button>
                
                <button
                  onClick={() => onNavigate('courses')}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm font-medium">Explore Courses</span>
                  </div>
                </button>
                
                <button
                  onClick={() => onNavigate('colleges')}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-sm font-medium">Find Colleges</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}