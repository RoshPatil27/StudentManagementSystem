from flask import Flask
from flask_cors import CORS
from StudentDetails.StudentRoutes import Student_Routes
from SubjectDetails.SubjectRoutes import Subject_routes

app = Flask(__name__)

# Allow only frontend origin
CORS(app)

app.register_blueprint(Student_Routes, url_prefix="/api/students")

app.register_blueprint(Subject_routes, url_prefix="/api/subjects")

if __name__ == "__main__":
    app.run(debug=True, port=5000)
