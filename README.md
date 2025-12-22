# robotics-club-website
A modern and responsive website for the Robotics Club, NIT Patna, developed during the Web Development Challenge. The project highlights club activities, domains, events, and team members, built using HTML, CSS, and JavaScript with a clean and intuitive user interface.
## Team Members
- Aditya Kumar – aditya.kumar00706@gmail.com | 9835369813  
- Akrati Singh – akratisinghaniya1098@gmail.com | 6393921024  
- Sweety Gupta – sg293307@gmail.com | 9170333553  
- Rudra Pratap – rudranonhar@gmail.com | 7903290473  

## Technology Choice and Reason
Frontend
HTML, CSS, JavaScript
Lightweight, fast, and easy to deploy
Suitable for farmers with low-end devices
Responsive Design
Works on mobile phones (primary device for farmers)
Backend
Node.js + Express.js
Handles API requests efficiently
Easy integration with AI APIs like Gemini
REST APIs
Clean separation between frontend and backend
AI / ML
Google Gemini Vision API
Analyzes uploaded crop images
Provides crop identification, stubble type, and suggestions
Chosen because it supports image + text understanding
Database
MongoDB
Flexible schema for farmer listings and images
Scales easily as users increase
Cloud & Tools
Google Cloud Platform (GCP)
Secure, scalable, and hackathon-friendly
Git & GitHub
Version control and team collaboration

## How We Ensured Future Scalability
Modular Architecture
Frontend, backend, and AI logic separated
API-based Design
Easy to add new features (price prediction, buyer matching, logistics)
Cloud-Ready
Can scale backend using cloud services (Cloud Run / Firebase)
Database Scalability
MongoDB supports horizontal scaling
Extensible AI Layer
Gemini can later be extended for:
Yield estimation
Burning risk detection
Market price suggestions

## External APIs / Libraries Used
Google Gemini API – Crop image analysis
Express.js – Backend framework
Multer – Image upload handling
dotenv – Environment variable management
Fetch API / Axios – API calls from frontend

## External Resources / Images Used
Icons
Font Awesome / Material Icons
Placeholder Images
Unsplash (for demo purposes only)
AI-generated outputs
Generated dynamically using Gemini API
No copyrighted images used

## Setup Instructions
1. Clone the Repository

https://github.com/AdityaKumar1511/robotics-club-website.git
cd robotics-club-website
2. Install Backend Dependencies

npm install
3. Configure Environment Variables
Create a .env file:

GEMINI_API_KEY=your_api_key_here
PORT=5000
4. Start Backend Server

npm start
5. Run Frontend
Open index.html in browser OR
Use Live Server extension in VS Code


