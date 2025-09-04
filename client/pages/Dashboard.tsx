import React from 'react';
import { TrendingUp, BookOpen, MapPin, Calendar, Award, AlertCircle } from 'lucide-react';
import './Dashboard.css';

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
    { label: 'Assessment Score', value: '85%', icon: TrendingUp, color: 'stat-icon-green' },
    { label: 'Courses Explored', value: '12', icon: BookOpen, color: 'stat-icon-blue' },
    { label: 'Colleges Shortlisted', value: '8', icon: MapPin, color: 'stat-icon-purple' },
    { label: 'Applications Pending', value: '3', icon: AlertCircle, color: 'stat-icon-orange' }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        {/* Welcome Section */}
        <div className="welcome-section">
          <h1 className="welcome-title">
            Welcome back, {user?.name || 'Student'}!
          </h1>
          <p className="welcome-subtitle">
            Here's your personalized guidance dashboard for making informed educational decisions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="stats-grid">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-card-content">
                  <div className="stat-info">
                    <p className="stat-label">{stat.label}</p>
                    <p className="stat-value">{stat.value}</p>
                  </div>
                  <Icon className={`stat-icon ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="dashboard-grid">
          {/* Personalized Recommendations */}
          <div>
            <div className="recommendations-card">
              <div className="recommendations-header">
                <h2 className="recommendations-title">
                  Personalized Recommendations
                </h2>
                <button
                  onClick={() => onNavigate('assessment')}
                  className="retake-button"
                >
                  Retake Assessment
                </button>
              </div>
              
              <div className="recommendations-list">
                {recommendations.map((rec, index) => (
                  <div key={index} className="recommendation-item">
                    <div className="recommendation-header">
                      <h3 className="recommendation-title">{rec.title}</h3>
                      <span className="match-badge">
                        {rec.match}% match
                      </span>
                    </div>
                    <p className="recommendation-reason">{rec.reason}</p>
                    <button className="learn-more-button">
                      Learn More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Upcoming Deadlines */}
            <div className="deadlines-card">
              <div className="deadlines-header">
                <h2 className="deadlines-title">Upcoming Deadlines</h2>
                <Calendar className="calendar-icon" />
              </div>
              
              <div className="deadlines-list">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="deadline-item">
                    <div className="deadline-info">
                      <p className="deadline-title">{deadline.title}</p>
                      <p className="deadline-date">{deadline.date}</p>
                    </div>
                    <span className="deadline-badge">
                      {deadline.daysLeft} days
                    </span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => onNavigate('timeline')}
                className="view-all-button"
              >
                View All Events →
              </button>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions-card">
              <h2 className="quick-actions-title">Quick Actions</h2>
              <div className="quick-actions-list">
                <button
                  onClick={() => onNavigate('assessment')}
                  className="quick-action-button"
                >
                  <div className="quick-action-content">
                    <TrendingUp className="quick-action-icon blue" />
                    <span className="quick-action-text">Take Assessment</span>
                  </div>
                </button>
                
                <button
                  onClick={() => onNavigate('courses')}
                  className="quick-action-button green"
                >
                  <div className="quick-action-content">
                    <BookOpen className="quick-action-icon green" />
                    <span className="quick-action-text">Explore Courses</span>
                  </div>
                </button>
                
                <button
                  onClick={() => onNavigate('colleges')}
                  className="quick-action-button purple"
                >
                  <div className="quick-action-content">
                    <MapPin className="quick-action-icon purple" />
                    <span className="quick-action-text">Find Colleges</span>
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