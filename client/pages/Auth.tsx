import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import './Auth.css';

interface AuthProps {
  onLogin: (userData: any) => void;
  onRegister: (userData: any) => void;
}

export default function Auth({ onLogin, onRegister }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    class: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onLogin({
        name: formData.name || 'Demo User',
        email: formData.email,
        class: 'Class 12',
        interests: ['Computer Science', 'Mathematics']
      });
    } else {
      onRegister(formData);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <div className="auth-icon-wrapper">
            <User className="auth-icon" />
          </div>
          <h2 className="auth-title">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h2>
          <p className="auth-subtitle">
            {isLogin 
              ? 'Sign in to access your personalized career guidance'
              : 'Join thousands of students finding their perfect career path'
            }
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <div className="input-wrapper">
                  <User className="input-icon" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  className="form-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
              </div>
            </div>

            {!isLogin && (
              <>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="15"
                      max="25"
                      className="form-input form-input-no-icon"
                      placeholder="Age"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="class" className="form-label">
                      Class
                    </label>
                    <select
                      id="class"
                      name="class"
                      className="form-select"
                      value={formData.class}
                      onChange={(e) => handleInputChange('class', e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 12">Class 12</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="form-input form-input-no-icon"
                    placeholder="Enter your city"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  />
                </div>
              </>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            {isLogin ? 'Sign in' : 'Create account'}
            <ArrowRight className="submit-arrow" />
          </button>

          <div className="toggle-auth">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-button"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}