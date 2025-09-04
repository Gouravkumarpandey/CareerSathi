import React from 'react';
import { ArrowRight, Users, BookOpen, MapPin, Calendar, TrendingUp, Award } from 'lucide-react';
import './Home.css';

interface LandingProps {
  onGetStarted: () => void;
}

export default function Landing({ onGetStarted }: LandingProps) {
  const features = [
    {
      icon: Users,
      title: 'Personalized Assessment',
      description: 'Take our comprehensive aptitude test to discover your strengths and interests.'
    },
    {
      icon: BookOpen,
      title: 'Course Guidance',
      description: 'Explore detailed career paths for Arts, Science, Commerce, and Vocational streams.'
    },
    {
      icon: MapPin,
      title: 'College Directory',
      description: 'Find nearby government colleges with course details, fees, and facilities.'
    },
    {
      icon: Calendar,
      title: 'Timeline Tracker',
      description: 'Never miss important admission dates, scholarships, and entrance exams.'
    },
    {
      icon: TrendingUp,
      title: 'Career Mapping',
      description: 'Visualize your career journey from graduation to professional success.'
    },
    {
      icon: Award,
      title: 'Success Stories',
      description: 'Learn from alumni who have successfully built careers in various fields.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students Guided' },
    { number: '500+', label: 'Government Colleges' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Career Paths' }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-wrapper">
        <div className="hero-content-wrapper">
          <div className="hero-text-center">
            <h1 className="hero-main-title">
              Your Future Starts with the
              <span className="hero-title-highlight"> Right Choice</span>
            </h1>
            <p className="hero-description">
              Get personalized guidance for choosing the perfect stream, course, and college. 
              Make informed decisions about your education and career with our AI-powered advisor.
            </p>
            <div className="hero-button-container">
              <button
                onClick={onGetStarted}
                className="hero-primary-btn"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 arrow-icon" size={20} />
              </button>
              <button className="hero-secondary-btn">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-wrapper">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">
                  {stat.number}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-wrapper">
          <div className="features-header">
            <h2 className="features-main-title">
              Everything You Need for Your Educational Journey
            </h2>
            <p className="features-subtitle">
              Comprehensive tools and guidance to help you make the right educational choices
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card"
                >
                  <div className="feature-icon-wrapper">
                    <Icon className="feature-icon" />
                  </div>
                  <h3 className="feature-card-title">
                    {feature.title}
                  </h3>
                  <p className="feature-card-description">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-wrapper">
          <h2 className="cta-title">
            Ready to Shape Your Future?
          </h2>
          <p className="cta-description">
            Join thousands of students who have found their perfect career path with EduGuide
          </p>
          <button
            onClick={onGetStarted}
            className="cta-button"
          >
            Start Your Journey
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
