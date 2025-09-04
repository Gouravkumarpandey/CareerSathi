const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');

dotenv.config();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

/**
 * Generate career recommendations based on user interests and skills
 * @param {string} userProfile - User's interests, skills, and preferences
 * @returns {Promise<string>} - Career recommendations
 */
async function generateCareerRecommendations(userProfile) {
  try {
    const prompt = `Based on the following user profile, provide personalized career recommendations:
    ${userProfile}
    
    Please provide:
    1. Top 5 suitable career paths
    2. Required skills for each career
    3. Education requirements
    4. Expected salary ranges
    5. Growth prospects`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating career recommendations:', error);
    throw error;
  }
}

/**
 * Generate course recommendations based on career goals
 * @param {string} careerGoals - User's career goals
 * @returns {Promise<string>} - Course recommendations
 */
async function generateCourseRecommendations(careerGoals) {
  try {
    const prompt = `Based on the following career goals, recommend relevant courses:
    ${careerGoals}
    
    Please provide:
    1. Essential courses to take
    2. Course difficulty level
    3. Recommended learning path
    4. Time investment required`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating course recommendations:', error);
    throw error;
  }
}

module.exports = {
  generateCareerRecommendations,
  generateCourseRecommendations
};
