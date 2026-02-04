from flask import Blueprint, request, jsonify
from ResultDetails.ResultController import (
    calculate_total_marks_student_result,
    calculate_student_result,
    get_all_results,
    get_student_results,
)

Result_Routes = Blueprint("Result_Routes", __name__)

@Result_Routes.route("/calculateTotalMarks", methods=["POST"])
def calculate_total_marks_student_result():
    calculate_total_marks_student_result()
    return jsonify({"message": "Total marks calculated successfully."}), 200

@Result_Routes.route("/calculate", methods=["POST"])
def calculate_student_result():
    calculate_student_result()
    return jsonify({"message": "Result calculated successfully."}), 200

@Result_Routes.route("/all", methods=["GET"])
def get_all_results():
    results = get_all_results()
    return results

@Result_Routes.route("/student/<student_id>", methods=["GET"])
def get_student_results(student_id):
    results = get_student_results(student_id)
    return results


