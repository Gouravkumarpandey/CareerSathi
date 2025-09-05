import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Assessment from './components/Assessment';
import CourseExplorer from './components/CourseExplorer';
import CollegeDirectory from './components/CollegeDirectory';
import Timeline from './components/Timeline';
import Profile from './components/Profile';
import Auth from './components/Auth';

function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [user, setUser] = useState<any>(null);
  const [assessmentResults, setAssessmentResults] = useState<any>(null);

  const handleLogin = (userData: any) => {
    setUser(userData);
    setActiveTab('dashboard');
  };

  const handleRegister = (userData: any) => {
    setUser(userData);
    setActiveTab('dashboard');
  };

  const handleGetStarted = () => {
    if (user) {
      setActiveTab('dashboard');
    } else {
      setActiveTab('login');
    }
  };

  const handleAssessmentComplete = (results: any) => {
    setAssessmentResults(results);
    setActiveTab('dashboard');
  };

  const handleUpdateUser = (userData: any) => {
    setUser({ ...user, ...userData });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'landing':
        return <Landing onGetStarted={handleGetStarted} />;
      case 'login':
        return <Auth onLogin={handleLogin} onRegister={handleRegister} />;
      case 'dashboard':
        return <Dashboard user={user} onNavigate={setActiveTab} />;
      case 'assessment':
        return <Assessment onComplete={handleAssessmentComplete} />;
      case 'courses':
        return <CourseExplorer />;
      case 'colleges':
        return <CollegeDirectory />;
      case 'timeline':
        return <Timeline />;
      case 'profile':
        return <Profile user={user} onUpdateUser={handleUpdateUser} />;
      default:
        return <Dashboard user={user} onNavigate={setActiveTab} />;
    }
  };

  const shouldShowNavigation = activeTab !== 'landing' && activeTab !== 'login';

  return (
    <div className="min-h-screen bg-gray-50">
      {shouldShowNavigation && (
        <Navigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          user={user}
        />
      )}
      {renderContent()}
    </div>
  );
}

export default App;