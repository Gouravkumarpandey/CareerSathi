export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: string;
  class: string;
  interests: string[];
  location: string;
  createdAt: Date;
}

export interface Course {
  id: string;
  name: string;
  category: 'Arts' | 'Science' | 'Commerce' | 'Vocational';
  duration: string;
  description: string;
  careerPaths: CareerPath[];
  eligibility: string[];
  averageSalary: string;
  topColleges: string[];
}

export interface CareerPath {
  title: string;
  description: string;
  averageSalary: string;
  jobOpportunities: string[];
  higherEducation: string[];
  governmentExams: string[];
}

export interface College {
  id: string;
  name: string;
  location: string;
  type: 'Government' | 'Private';
  courses: string[];
  cutoffs: { [course: string]: number };
  facilities: string[];
  mediumOfInstruction: string[];
  hostel: boolean;
  fees: { [course: string]: number };
  rating: number;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'admission' | 'scholarship' | 'exam' | 'counseling';
  isImportant: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  category: 'interests' | 'aptitude' | 'personality';
}

export interface QuizResult {
  category: string;
  score: number;
  recommendations: string[];
}