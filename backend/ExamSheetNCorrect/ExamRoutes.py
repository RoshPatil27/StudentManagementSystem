from flask import Blueprint, request, jsonify
from ExamSheetNCorrect.ExamController import *

Exam_Routes = Blueprint("Exam_Routes", __name__)


# CREATE
@Exam_Routes.route("/exams", methods=["POST"])
def create_exam_route():
    data = request.get_json()
    exam = create_exam(data)
    return jsonify(exam), 201


# GET ALL
@Exam_Routes.route("/exams", methods=["GET"])
def get_all_exams_route():
    exams = get_all_exams()
    return jsonify(exams), 200


# GET SUBJECT EXAMS
@Exam_Routes.route("/exams/<exam_id>", methods=["GET"])
def get_exam_by_id_route(exam_id):
    try:
        exam = get_exam_by_id(exam_id)
        if exam:
            return jsonify(exam), 200
        return jsonify({"message": "Exam not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    

# GET EXAM BY SUBJECT ID
@Exam_Routes.route("/exams/subject/<subject_id>", methods=["GET"])
def get_exam_by_subject(subject_id):
    result = get_exam_by_subject_controller(subject_id)

    if not result:
        return jsonify({"message": "Exam not found"}), 404

    return jsonify(result), 200


# GET STUDENT EXAMS
@Exam_Routes.route("/exams/student/<student_id>", methods=["GET"])
def get_student_exams_route(student_id):
    exams = get_student_exams(student_id)
    return jsonify(exams), 200


# ATTEND EXAM
@Exam_Routes.route("/exams/attend", methods=["POST"])
def attend_exam_route():
    data = request.get_json()
    result = attend_exam(data)
    return jsonify(result), 201


# CORRECT EXAM
@Exam_Routes.route("/exams/correct", methods=["PUT"])
def correct_exam_sheet():
    return correct_exam_sheet_controller()


# UPDATE
@Exam_Routes.route("/exams/<exam_id>", methods=["PUT"])
def update_exam_route(exam_id):
    data = request.get_json()
    updated = update_exam(exam_id, data)

    if updated:
        return jsonify({"message": "Exam updated"}), 200
    return jsonify({"message": "Exam not found"}), 404


# DELETE
@Exam_Routes.route("/delete/<exam_id>", methods=["DELETE"])
def delete_exam_route(exam_id):
    try:
        deleted = delete_exam(exam_id)

        if deleted:
            return jsonify({"message": "Exam deleted"}), 200

        return jsonify({"message": "Exam not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 400
