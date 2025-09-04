import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, RotateCcw, TrendingUp } from 'lucide-react';

interface AssessmentProps {
  onComplete: (results: any) => void;
}

export default function Assessment({ onComplete }: AssessmentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [showResults, setShowResults] = useState(false);

  const steps = [
    {
      title: 'Personal Information',
      description: 'Tell us about yourself',
      questions: [
        {
          id: 'age',
          question: 'What is your age?',
          type: 'number',
          required: true
        },
        {
          id: 'class',
          question: 'Which class have you completed?',
          type: 'select',
          options: ['Class 10', 'Class 12', 'Graduate'],
          required: true
        },
        {
          id: 'location',
          question: 'What is your current location?',
          type: 'text',
          required: true
        }
      ]
    },
    {
      title: 'Interest Assessment',
      description: 'Discover what you enjoy doing',
      questions: [
        {
          id: 'subjects',
          question: 'Which subjects do you enjoy the most?',
          type: 'multiple-choice',
          options: [
            'Mathematics', 'Physics', 'Chemistry', 'Biology', 
            'English', 'History', 'Geography', 'Economics',
            'Computer Science', 'Art & Design', 'Music', 'Sports'
          ],
          multiSelect: true
        },
        {
          id: 'activities',
          question: 'What activities do you prefer in your free time?',
          type: 'multiple-choice',
          options: [
            'Reading books', 'Solving puzzles', 'Drawing/Painting', 
            'Playing sports', 'Coding/Programming', 'Watching documentaries',
            'Social activities', 'Music/Dance', 'Writing', 'Building things'
          ],
          multiSelect: true
        }
      ]
    },
    {
      title: 'Aptitude Test',
      description: 'Test your problem-solving abilities',
      questions: [
        {
          id: 'math_problem',
          question: 'If a train travels 120 km in 2 hours, what is its speed?',
          type: 'multiple-choice',
          options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'],
          correct: 1
        },
        {
          id: 'logical_reasoning',
          question: 'Complete the pattern: 2, 6, 12, 20, ?',
          type: 'multiple-choice',
          options: ['28', '30', '32', '36'],
          correct: 1
        },
        {
          id: 'english_comprehension',
          question: 'Choose the correct synonym for "Abundant":',
          type: 'multiple-choice',
          options: ['Scarce', 'Plentiful', 'Limited', 'Rare'],
          correct: 1
        }
      ]
    },
    {
      title: 'Career Preferences',
      description: 'What kind of career appeals to you?',
      questions: [
        {
          id: 'work_environment',
          question: 'What work environment do you prefer?',
          type: 'multiple-choice',
          options: [
            'Office/Corporate setting',
            'Laboratory/Research facility',
            'Outdoor/Field work',
            'Creative studio',
            'Hospital/Healthcare',
            'Educational institution'
          ]
        },
        {
          id: 'career_goals',
          question: 'What is most important to you in a career?',
          type: 'multiple-choice',
          options: [
            'High salary and financial stability',
            'Job satisfaction and passion',
            'Work-life balance',
            'Social impact and helping others',
            'Innovation and creativity',
            'Leadership and management'
          ]
        }
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    // Mock calculation logic
    const results = {
      recommendedStreams: ['Science', 'Engineering'],
      aptitudeScore: 85,
      topSkills: ['Problem Solving', 'Analytical Thinking', 'Technical Skills'],
      careerMatches: [
        { career: 'Software Engineer', match: 92 },
        { career: 'Data Scientist', match: 88 },
        { career: 'Research Scientist', match: 85 }
      ]
    };
    
    setShowResults(true);
    onComplete(results);
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h1>
              <p className="text-gray-600">Here are your personalized results and recommendations</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Aptitude Score</h3>
                <div className="flex items-center mb-2">
                  <div className="text-4xl font-bold text-blue-600">85%</div>
                  <TrendingUp className="h-6 w-6 text-green-500 ml-2" />
                </div>
                <p className="text-blue-700">Excellent analytical and problem-solving abilities</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Recommended Streams</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    Science
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Engineering
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Top Career Matches</h3>
              <div className="space-y-3">
                {[
                  { career: 'Software Engineer', match: 92 },
                  { career: 'Data Scientist', match: 88 },
                  { career: 'Research Scientist', match: 85 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{item.career}</span>
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full h-2 w-24 mr-3">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${item.match}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{item.match}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetAssessment}
                className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Retake Assessment
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Explore Recommended Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-gray-700">{Math.round(progress)}%</span>
          </div>
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Assessment Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentStepData.title}</h2>
            <p className="text-gray-600">{currentStepData.description}</p>
          </div>

          <div className="space-y-6">
            {currentStepData.questions.map((question, index) => (
              <div key={question.id}>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  {question.question}
                  {question.required && <span className="text-red-500 ml-1">*</span>}
                </label>

                {question.type === 'text' && (
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  />
                )}

                {question.type === 'number' && (
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswerChange(question.id, parseInt(e.target.value))}
                  />
                )}

                {question.type === 'select' && (
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  >
                    <option value="">Select an option</option>
                    {question.options?.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>{option}</option>
                    ))}
                  </select>
                )}

                {question.type === 'multiple-choice' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {question.options?.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        type="button"
                        onClick={() => {
                          if (question.multiSelect) {
                            const current = answers[question.id] || [];
                            const updated = current.includes(option)
                              ? current.filter((item: string) => item !== option)
                              : [...current, option];
                            handleAnswerChange(question.id, updated);
                          } else {
                            handleAnswerChange(question.id, optionIndex);
                          }
                        }}
                        className={`p-4 text-left border-2 rounded-lg transition-colors duration-200 ${
                          question.multiSelect
                            ? (answers[question.id] || []).includes(option)
                              ? 'border-blue-500 bg-blue-50 text-blue-900'
                              : 'border-gray-200 hover:border-blue-300'
                            : answers[question.id] === optionIndex
                            ? 'border-blue-500 bg-blue-50 text-blue-900'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </button>

            <button
              onClick={nextStep}
              className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              {currentStep === steps.length - 1 ? 'Complete Assessment' : 'Next'}
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}