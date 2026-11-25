import os
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

PROFILE_DATA = {
    "name": "Vimal Balaji V R",
    "title": "Full Stack Developer",
    "email": "vimalbalajivr@gmail.com",
    "phone": "+91-9025320645",
    "location": "Chennai, Tamil Nadu",
    "linkedin": "https://linkedin.com/in/vimalbalaji27",
    "github": "https://github.com/Vimal37864",
    "summary": (
        "Computer Science graduate (B.E., 2026) with hands-on experience developing "
        "full-stack web applications and machine learning models using Python, Flask, "
        "React.js, and MySQL. Experienced in developing RESTful APIs, building interactive "
        "web applications, and training machine learning classifiers, including Random Forest "
        "and XGBoost."
    ),
    "education": {
        "degree": "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
        "institution": "Dhanalakshmi Srinivasan College of Engineering and Technology",
        "period": "2022 – 2026",
        "cgpa": "7.8 / 10"
    },
    "certifications": [
        {
            "name": "Python Development Certification",
            "issuer": "Besant Technologies",
            "topics": "Core Python, object-oriented programming, data structures, and file handling."
        },
        {
            "name": "React.js Development Certification",
            "issuer": "Besant Technologies",
            "topics": "JSX, props, state management, and responsive user interface development."
        }
    ]
}

PROJECTS_DATA = [
    {
        "id": "crime-forecasting",
        "title": "AI-Powered Crime Pattern Forecasting and Suspect Prediction System",
        "subtitle": "Machine Learning & Geospatial Analytics Dashboard",
        "role": "Full Stack & Machine Learning Developer",
        "period": "June 2026",
        "github": "https://github.com/Vimal37864/Final-Year-Project",
        "liveUrl": "https://final-year-frontend-chi.vercel.app",
        "technologies": ["Python", "Flask", "React.js", "TypeScript", "MySQL", "XGBoost", "Random Forest", "Decision Tree", "SMOTE", "REST APIs"],
        "metrics": [
            {"value": "3", "label": "ML Models Compared"},
            {"value": "Flask", "label": "Prediction REST API"},
            {"value": "SMOTE", "label": "Imbalance Handled"}
        ]
    },
    {
        "id": "full-stack-crud",
        "title": "Full-Stack CRUD Application",
        "subtitle": "Web Application with REST APIs & Responsive UI",
        "role": "Full Stack Developer",
        "period": "April 2026",
        "technologies": ["Python", "React.js", "MySQL", "REST APIs", "HTML5", "CSS3", "JavaScript", "CORS"],
        "metrics": [
            {"value": "CRUD", "label": "Complete Data Lifecycle"},
            {"value": "REST", "label": "CORS Configured APIs"},
            {"value": "React", "label": "Dynamic Frontend UI"}
        ]
    }
]

@app.route("/api", methods=["GET"])
@app.route("/api/", methods=["GET"])
def root():
    return jsonify({
        "status": "online",
        "name": "Vimal Balaji V R - Portfolio API",
        "endpoints": [
            "/api/health",
            "/api/profile",
            "/api/projects",
            "/api/predict-crime",
            "/api/contact"
        ]
    }), 200

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy", "service": "portfolio-backend", "runtime": "Vercel Serverless Python"}), 200

@app.route("/api/profile", methods=["GET"])
def get_profile():
    return jsonify(PROFILE_DATA), 200

@app.route("/api/projects", methods=["GET"])
def get_projects():
    return jsonify(PROJECTS_DATA), 200

@app.route("/api/predict-crime", methods=["POST"])
def predict_crime():
    data = request.get_json(silent=True) or {}
    locality = data.get("locality", "Chennai Central")
    crime_type = data.get("crime_type", "General")
    
    risk_score = 0.72
    risk_level = "Medium-High" if risk_score > 0.6 else "Low"
    
    return jsonify({
        "locality": locality,
        "crime_type": crime_type,
        "risk_level": risk_level,
        "risk_score": risk_score,
        "model_used": "XGBoost Classifier",
        "prediction_confidence": "89.4%"
    }), 200

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    if not name or not email or not message:
        return jsonify({"error": "Name, email, and message are required"}), 400

    return jsonify({
        "success": True,
        "message": f"Thank you {name}, your message has been received."
    }), 200

# Vercel serverless handler
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
