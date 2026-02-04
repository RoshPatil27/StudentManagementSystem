from flask import jsonify
from database import student_exam_collection, result_collection, student_collection
from ResultDetails.ResultModels import Result

def calculate_total_marks_student_result():
    student_id = input("Enter Student ID: ")

    # 🔹 Check student exists
    student = student_collection.find_one({"StudentId": student_id})
    if not student:
        print("Student not found")
        return

    # 🔹 Get all exams attended by student
    exams = list(student_exam_collection.find({"student_id": student_id}))

    if not exams:
        print("No exam records found for this student")
        return

    total_marks = 0
    subject_count = 0

    print("\n--- Subject-wise Marks ---")
    for exam in exams:
        marks = exam.get("marks", 0)
        subject_id = exam.get("subject_id")

        print(f"Subject: {subject_id} | Marks: {marks}")
        total_marks += marks
        subject_count += 1

    print("\n--- Final Result ---")
    print("Total Marks:", total_marks)

    # 🔹 Store final result summary
    result_data = {
        "StudentId": student_id,
        "TotalMarks": total_marks,
    }

    result_collection.insert_one(result_data)
    print("Final result saved successfully!")

def calculate_student_result():
    student_id = input("Enter Student ID: ")

    # 🔹 Check student exists
    student = student_collection.find_one({"StudentId": student_id})
    if not student:
        print("Student not found")
        return

    # 🔹 Get all exams attended by student
    exams = list(student_exam_collection.find({"student_id": student_id}))

    if not exams:
        print("No exam records found for this student")
        return
    
    total_marks = 0
    subject_count = 0

    print("\n--- Subject-wise Marks ---")
    for exam in exams:
        marks = exam.get("marks", 0)
        subject_id = exam.get("subject_id")

        print(f"Subject: {subject_id} | Marks: {marks}")
        total_marks += marks
        subject_count += 1

    # 🔹 Calculate average marks
    average_marks = total_marks / subject_count

    # 🔹 Calculate grade
    if average_marks >= 90:
        grade = "A"
    elif average_marks >= 80:
        grade = "B"
    elif average_marks >= 70:
        grade = "C"
    elif average_marks >= 60:
        grade = "D"
    else:
        grade = "F"

    print("\n--- Final Result ---")
    print("Total Marks:", total_marks)
    print("Average Marks:", average_marks)
    print("Grade:", grade)

    # 🔹 Store final result summary
    result_data = {
        "StudentId": student_id,
        "TotalMarks": total_marks,
    }

    result_collection.insert_one(result_data)
    print("Final result saved successfully!")


def get_all_results():
    results = []

    for r in result_collection.find({}, {"_id": 0}):
        result_obj = Result(**r)
        results.append(result_obj)

    print("\n--- All Results ---\n")
    for res in results:
        print(res.to_dict())

    return results



def get_student_results(student_id):
    results = list(result_collection.find({"StudentId": student_id}, {"_id": 0}))

    if not results:
        print("No results found.")
        return

    for r in results:
        print(r)

    return results