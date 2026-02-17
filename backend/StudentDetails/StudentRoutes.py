from flask import Blueprint, request, jsonify
from StudentDetails.StudentController import *

Student_Routes = Blueprint("Student_Routes", __name__)

@Student_Routes.route("/create", methods=["POST"])
def add_student():
    data = request.get_json()
    student = create_student(data)
    return jsonify(student.to_dict()), 201

@Student_Routes.route("/getall", methods=["GET"])
def get_all_students_route():
    students = get_all_students()
    return jsonify([s.to_dict() for s in students]), 200

@Student_Routes.route("/get/<id>", methods=["GET"])
def get_student(id):
    student = get_student_by_id(id)
    return jsonify(student.to_dict()) if student else (jsonify({"msg": "Not found"}), 404)

@Student_Routes.route("/update/<id>", methods=["PUT"])
def update_student(id):
    data = request.get_json()
    update_Student(id, data)
    return jsonify({"msg": "Updated"}), 200

@Student_Routes.route("/delete/<id>", methods=["DELETE"])
def delete_student(id):
    delete_Student(id)
    return jsonify({"msg": "Deleted"}), 200

@Student_Routes.route("/search/id/<id>", methods=["GET"])
def search_by_id(id):
    student = Search_Student_by_Id(id)
    return jsonify(student.to_dict()) if student else (jsonify({"msg": "Not found"}), 404)

@Student_Routes.route("/search/name/<name>", methods=["GET"])
def search_by_name(name):
    students = Search_Student_by_Name(name)
    return jsonify([s.to_dict() for s in students]) if students else (jsonify({"msg": "Not found"}), 404)
