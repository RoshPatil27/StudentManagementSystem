from flask import Blueprint, request, jsonify
from StudentDetails.StudentController import create_student, get_all_students, get_student_by_id, update_Student, delete_Student

Student_Routes = Blueprint("Student_Routes", __name__)


@Student_Routes.route("/create", methods=["POST"])
def add_Student():
    data = request.get_json()
    student = create_student(**data)
    return jsonify(student.to_dict()), 201

@Student_Routes.route("/getall", methods=["GET"])
def get_all_Students():
    students = get_all_students()
    return jsonify([student.to_dict() for student in students]), 200

@Student_Routes.route("/get/<id>", methods=["GET"])
def get_Student_by_id(id):
    student = get_student_by_id(id)
    if student:
        return jsonify(student.to_dict()), 200
    else:
        return jsonify({"message": "No student found with the provided ID."}), 404

@Student_Routes.route("/update/<id>", methods=["PUT"])
def update_Student_by_id(id):
    data = request.get_json()
    update_Student(id, **data)
    return jsonify({"message": "Student updated successfully."}), 200

@Student_Routes.route("/delete/<id>", methods=["DELETE"])
def delete_Student_by_id(id):
    delete_Student(id)
    return jsonify({"message": "Student deleted successfully."}), 200


