from database import exam_collection, student_exam_collection
from bson import ObjectId
from flask import jsonify


# ==============================
# CREATE EXAM
# ==============================
def create_exam(data):
    exam_data = {
        "subject_id": data["subject_id"],
        "exam_date": data["exam_date"],
        "questions": data["questions"],
        "correct_answers": data["correct_answers"]
    }

    result = exam_collection.insert_one(exam_data)
    exam_data["_id"] = str(result.inserted_id)

    return exam_data


# ==============================
# ATTEND EXAM
# ==============================
def attend_exam(data):
    student_exam = {
        "student_id": data["student_id"],
        "subject_id": data["subject_id"],
        "student_answers": data["student_answers"],
        "marks": 0
    }

    student_exam_collection.insert_one(student_exam)
    return {"message": "Exam submitted successfully"}

# ==============================
# GET EXAM BY SUBJECT ID
# ==============================
def get_exam_by_subject_controller(subject_id):
    try:
        # If subject_id is stored as string
        exam = exam_collection.find_one({"subject_id": subject_id})

        if not exam:
            return None

        return {
            "subject_id": exam.get("subject_id"),
            "exam_date": exam.get("exam_date"),
            "questions": exam.get("questions", []),
            "correct_answers": exam.get("correct_answers", [])
        }

    except Exception as e:
        print("Error in get_exam_by_subject_controller:", e)
        return None


# ==============================
# CORRECT EXAM SHEET CONTROLLER
# ==============================
def correct_exam_sheet_controller():
    try:
        data = request.json
        student_id = data.get("student_id")
        subject_id = data.get("subject_id")

        if not student_id or not subject_id:
            return jsonify({"message": "Missing student_id or subject_id"}), 400

        # Find exam
        exam = exam_collection.find_one({"subject_id": subject_id})
        if not exam:
            return jsonify({"message": "Exam not found"}), 404

        correct_answers = exam.get("correct_answers", [])

        # Find student exam sheet
        exam_sheet = exam_collection.find_one({
            "student_id": student_id,
            "subject_id": subject_id
        })

        if not exam_sheet:
            return jsonify({"message": "Exam sheet not found"}), 404

        student_answers = exam_sheet.get("student_answers", [])

        # Calculate marks
        marks = sum(
            1 for i in range(len(correct_answers))
            if i < len(student_answers)
            and student_answers[i] == correct_answers[i]
        )

        total = len(correct_answers)

        # Update marks
        exam_collection.update_one(
            {"_id": exam_sheet["_id"]},
            {"$set": {"marks": marks, "total": total}}
        )

        return jsonify({
            "marks": marks,
            "total": total
        }), 200

    except Exception as e:
        return jsonify({"message": "Server Error", "error": str(e)}), 500
# ==============================
# GET ALL EXAMS
# ==============================
def get_all_exams():
    exams = list(exam_collection.find({}))
    for exam in exams:
        exam["_id"] = str(exam["_id"])
    return exams


# ==============================
# GET EXAM BY ID
# ==============================
def get_exam_by_id(exam_id):
    exam = exam_collection.find_one({"_id": ObjectId(exam_id)})
    if exam:
        exam["_id"] = str(exam["_id"])
    return exam

# ==============================
# GET STUDENT EXAMS
# ==============================
def get_student_exams(student_id):
    exams = list(student_exam_collection.find({"student_id": student_id}))
    for exam in exams:
        exam["_id"] = str(exam["_id"])
    return exams


# ==============================
# UPDATE EXAM
# ==============================
def update_exam(exam_id, data):
    result = exam_collection.update_one(
        {"subject_id": exam_id},
        {"$set": data}
    )
    return result.modified_count



# ==============================
# DELETE EXAM
# ==============================
def delete_exam(exam_id):
    result = exam_collection.delete_one({"_id": ObjectId(exam_id)})
    return result.deleted_count
