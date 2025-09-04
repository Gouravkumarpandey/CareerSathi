import React from 'react';
import { User, BookOpen, Calendar, MapPin, Settings, Home } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  user: { name: string } | null;
}

export default function Navigation({ activeTab, onTabChange, user }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'assessment', label: 'Assessment', icon: User },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'colleges', label: 'Colleges', icon: MapPin },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: Settings },
  ];

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-container">
          <div className="nav-logo">
            <BookOpen size={32} />
            <span style={{marginLeft: '0.5rem'}}>Career Sathi</span>
          </div>
          {user && (
            <ul className="nav-menu">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => onTabChange(item.id)}
                  >
                    <Icon size={18} style={{marginRight: '0.5rem', verticalAlign: 'middle'}} />
                    {item.label}
                  </li>
                );
              })}
            </ul>
          )}
          <div style={{display: 'flex', gap: '1rem'}}>
            {user ? (
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <span>Welcome, {user.name}!</span>
                <div 
                  style={{
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#667eea', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
            ) : (
              <button
                onClick={() => onTabChange('auth')}
                className="btn btn-primary"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}