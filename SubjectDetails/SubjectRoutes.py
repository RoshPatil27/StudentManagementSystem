from flask import Blueprint, request, jsonify
from SubjectDetails.SubjectController import create_subject, get_all_subjects, get_subject_by_id, update_subject, delete_subject

Subject_routes = Blueprint("student_routes", __name__)

@Subject_routes.route("/create", methods=["POST"])
def add_subject():
    data = request.get_json()
    subject = create_subject(**data)
    return jsonify(subject.to_dict()), 201

@Subject_routes.route("/getall", methods=["GET"])
def get_all_subjects():
    subjects = get_all_subjects()
    return jsonify([subject.to_dict() for subject in subjects]), 200

@Subject_routes.route("/get/<id>", methods=["GET"])
def get_subject_by_id(id):
    subject = get_subject_by_id(id)
    if subject:
        return jsonify(subject.to_dict()), 200
    else:
        return jsonify({"message": "No subject found with the provided ID."}), 404

@Subject_routes.route("/update/<id>", methods=["PUT"])
def update_subject_by_id(id):
    data = request.get_json()
    update_subject(id, **data)
    return jsonify({"message": "Subject updated successfully."}), 200

@Subject_routes.route("/delete/<id>", methods=["DELETE"])
def delete_subject_by_id(id):
    delete_subject(id)
    return jsonify({"message": "Subject deleted successfully."}), 200

