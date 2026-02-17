from flask import Blueprint, request, jsonify
from ExamSheetNCorrect.ExamController import (
    create_exam,
    get_all_exams,
    update_exam,
    delete_exam,
    attend_exam, 
    correct_exam,
    get_subject_exams,
    get_student_exams,
)

Exam_Routes = Blueprint("Exam_Routes", __name__)

@Exam_Routes.route("/create", methods=["POST"])
def create_exam_route():
    create_exam()
    return jsonify({"message": "Exam created successfully."}), 201

@Exam_Routes.route("/getall", methods=["GET"])
def get_all_exams_route():
    exams = get_all_exams()
    return jsonify([exam.to_dict() for exam in exams]), 200

@Exam_Routes.route("/attend", methods=["POST"])
def attend_exam_route():
    attend_exam()
    return jsonify({"message": "Exam submitted successfully."}), 200

@Exam_Routes.route("/correct", methods=["POST"])
def correct_exam_route():
    correct_exam()
    return jsonify({"message": "Exam corrected successfully."}), 200

@Exam_Routes.route("/get/<id>", methods=["GET"])
def get_subject_exams_route(id):
    exams = get_subject_exams(id)
    return jsonify([exam.to_dict() for exam in exams]), 200

@Exam_Routes.route("/get/<id>", methods=["GET"])
def get_student_exams_route(id):
    exams = get_student_exams(id)
    return jsonify([exam.to_dict() for exam in exams]), 200


@Exam_Routes.route("/update/<id>", methods=["PUT"])
def update_exam_route(id):
    data = request.get_json()
    update_exam(id, **data)
    return jsonify({"message": "Exam updated successfully."}), 200

@Exam_Routes.route("/delete/<id>", methods=["DELETE"])
def delete_exam_route(id):
    delete_exam(id)
    return jsonify({"message": "Exam deleted successfully."}), 200

