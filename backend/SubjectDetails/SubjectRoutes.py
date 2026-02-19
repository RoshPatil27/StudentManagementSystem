from flask import Blueprint, request, jsonify
from SubjectDetails.SubjectController import (
    create_subject,
    get_all_subjects as get_all_subjects_controller,
    get_subject_by_id as get_subject_by_id_controller,
    update_subject,
    delete_subject,
    Search_Subject_by_Id as search_subject_by_id_controller,
    Search_Subject_by_Name as search_subject_by_name_controller
)

Subject_routes = Blueprint("subject_routes", __name__)

@Subject_routes.route("/create", methods=["POST"])
def add_subject():
    data = request.get_json()
    subject = create_subject(data)
    return jsonify(subject.to_dict()), 201


@Subject_routes.route("/getall", methods=["GET"])
def get_all_subjects():
    subjects = get_all_subjects_controller()
    return jsonify([subject.to_dict() for subject in subjects]), 200


@Subject_routes.route("/get/<id>", methods=["GET"])
def get_subject_by_id(id):
    subject = get_subject_by_id_controller(id)
    if subject:
        return jsonify(subject.to_dict()), 200
    else:
        return jsonify({"message": "No subject found with the provided ID."}), 404


@Subject_routes.route("/update/<id>", methods=["PUT"])
def update_subject_by_id(id):
    data = request.get_json()
    update_subject(id, data)
    return jsonify({"message": "Subject updated successfully."}), 200


@Subject_routes.route("/delete/<SubjectId>", methods=["DELETE"])
def delete_subject_by_id(SubjectId):
    result = delete_subject(SubjectId)
    if result:
        return jsonify({"message": "Subject deleted successfully."}), 200
    else:
        return jsonify({"message": "Subject not found."}), 404



@Subject_routes.route("/search/id/<id>", methods=["GET"])
def search_by_id(id):
    subject = search_subject_by_id_controller(id)
    if subject:
        return jsonify(subject.to_dict()), 200
    else:
        return jsonify({"message": "No subject found with the provided ID."}), 404


@Subject_routes.route("/search/name/<name>", methods=["GET"])
def search_by_name(name):
    subject = search_subject_by_name_controller(name)
    if subject:
        return jsonify(subject.to_dict()), 200
    else:
        return jsonify({"message": "No subject found with the provided name."}), 404
