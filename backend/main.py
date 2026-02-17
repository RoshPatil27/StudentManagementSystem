from flask import Flask
from flask_cors import CORS
from StudentDetails.StudentRoutes import Student_Routes

app = Flask(__name__)
CORS(app)

app.register_blueprint(Student_Routes, url_prefix="/api/students")

if __name__ == "__main__":
    app.run(debug=True, port=5000)
