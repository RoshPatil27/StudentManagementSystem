from ExamSheetNCorrect.ExamModels import Exam
from database import exam_collection

def create_exam():
    subject_id = input("Enter Subject ID: ")
    exam_date = input("Enter Exam Date: ")

    num_questions = int(input("Enter Number of Questions: "))

    questions = []
    correct_answers = []

    for i in range(num_questions):
        print(f"\nQuestion {i+1}")
        q = input("Enter Question: ")
        a = input("Enter Correct Answer: ")

        questions.append(q)
        correct_answers.append(a)

    exam = Exam(subject_id, exam_date, questions, correct_answers)
    exam_collection.insert_one(exam.to_dict())
    print("Exam created successfully!")

from database import student_exam_collection

def attend_exam():
    student_id = input("Enter Student ID: ")
    subject_id = input("Enter Subject ID: ")

    exam = exam_collection.find_one({"subject_id": subject_id})

    if not exam:
        print("Exam not found")
        return

    student_answers = []

    print("\n--- Answer the Questions ---")
    for i, question in enumerate(exam["questions"]):
        print(f"\nQ{i+1}: {question}")
        ans = input("Your Answer: ")
        student_answers.append(ans)

    student_exam_collection.insert_one({
        "student_id": student_id,
        "subject_id": subject_id,
        "student_answers": student_answers,
        "marks": 0
    })

    print("Exam submitted successfully!")

def correct_exam(student_id, subject_id):
    exam = exam_collection.find_one({"subject_id": subject_id})
    student_exam = student_exam_collection.find_one({
        "student_id": student_id,
        "subject_id": subject_id
    })

    if not exam or not student_exam:
        print("Exam data missing")
        return

    correct_answers = exam["correct_answers"]
    student_answers = student_exam["student_answers"]

    marks = 0

    for i in range(len(correct_answers)):
        if student_answers[i].strip().lower() == correct_answers[i].strip().lower():
            marks += 1

    student_exam_collection.update_one(
        {"_id": student_exam["_id"]},
        {"$set": {"marks": marks}}
    )

    print(f"Exam corrected. Marks obtained: {marks}/{len(correct_answers)}")

def get_all_exams():
    exams = list(exam_collection.find({}))
    for exam in exams:
        print(f"Subject ID: {exam['subject_id']}, Exam Date: {exam['exam_date']}")

    return exams

def get_subject_exams(subject_id):
    exams = list(exam_collection.find({"subject_id": subject_id}))
    for exam in exams:
        print(f"Subject ID: {exam['subject_id']}, Exam Date: {exam['exam_date']}")

    return exams

def get_student_exams(student_id):
    student_exams = list(student_exam_collection.find({"student_id": student_id}))

    if not student_exams:
        print("No exams found for this student.")
        return

    print("\n--- Student Exam Records ---\n")

    for se in student_exams:
        subject_id = se["subject_id"]

        # Fetch exam info from exam collection
        exam = exam_collection.find_one({"subject_id": subject_id})

        exam_date = exam["exam_date"] if exam and "exam_date" in exam else "N/A"
        marks = se.get("marks", 0)

        print(f"Subject ID: {subject_id}")
        print(f"Exam Date: {exam_date}")
        print(f"Marks: {marks}")
        print("------------------------")

    return student_exams


def update_exam(exam_id):
    field = input("Enter field to update: ")
    value = input("Enter new value: ")

    result = exam_collection.update_one({"_id": exam_id}, {"$set": {field: value}})

    if result.modified_count > 0:
        print("Exam updated successfully.")
    else:
        print("No exam found with the provided ID.")

def delete_exam(exam_id):
    result = exam_collection.delete_one({"_id": exam_id})
    if result.deleted_count > 0:
        print("Exam deleted successfully.")
    else:
        print("No exam found with the provided ID.")


