from StudentDetails.StudentModels import Student
from database import student_collection

def create_student(data):
    student = Student(**data)
    student_collection.insert_one(student.to_dict())
    return student


def get_all_students():
    students = []
    for student in student_collection.find({}, {"_id": 0}):
        students.append(Student(**student))
    return students


def get_student_by_id(id):
    student_data = student_collection.find_one({"StudentId": id}, {"_id": 0})

    if not student_data:
        print("No student found with the provided ID.")
        return

    # Convert dict → Student object
    student = Student(**student_data)

    print("\n----- Student Details -----\n")
    print(student.to_dict())

    return student


def update_Student(StudentId, data):
    result = student_collection.update_one(
        {"StudentId": StudentId},
        {"$set": data}
    )
    return result.modified_count > 0


def delete_Student(StudentId):
    result = student_collection.delete_one({"StudentId": StudentId})

    if result.deleted_count > 0:
        print("Student deleted successfully.")
    else:
        print("No student found with the provided ID.")


def Search_Student_by_Id(StudentId):
    student_data = student_collection.find_one({"StudentId": StudentId}, {"_id": 0})

    if not student_data:
        print("No student found with the provided ID.")
        return

    # Convert dict → Student object
    student = Student(**student_data)

    print("\n----- Student Details -----\n")
    print(student.to_dict())

    return student


def Search_Student_by_Name(FullName):
    students = []

    for student in student_collection.find({"FullName": FullName}, {"_id": 0}):
        students.append(Student(**student))

    if not students:
        print("No students found with the provided name.")
        return

    print("\n----- Search Results -----\n")
    for s in students:
        print(s.to_dict())

    return students

