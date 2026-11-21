# Backend API — Vimal Balaji V R Portfolio

Python Flask RESTful API server for the portfolio application.

## Prerequisites
- Python 3.9+

## Setup & Running

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the server:**
   ```bash
   python app.py
   ```
   The backend server will start on `http://localhost:5000`.

## API Endpoints

- `GET  /api/health` — Service health check
- `GET  /api/profile` — Profile data, education, and certifications
- `GET  /api/projects` — Projects list and metrics
- `POST /api/predict-crime` — AI Crime Pattern Forecasting simulation endpoint
- `POST /api/contact` — Contact form endpoint
