from StudentDetails.StudentModels import Student
from database import student_collection

def create_student():
    student = Student(
        StudentId = input("Enter Student ID: "),
        FullName = input("Enter Full Name: "),
        RollNo = input("Enter Roll No: "),
        Email = input("Enter Email: "),
        Address = input("Enter Address: "),
        ContactNo = input("Enter Contact No: "),
        DOB = input("Enter Date of Birth: "),
        Gender = input("Enter Gender: "),
        Class = input("Enter Class: "),
        Section = input("Enter Section: "),
        emergencyName = input("Enter Emergency Name: "),
        emergencyContact = input("Enter Emergency Contact: "),
        emergencyRelation = input("Enter Emergency Relation: "),
        bloodGroup = input("Enter Blood Group: "),
    )
    student_collection.insert_one(student.to_dict())
    return student

def get_all_students():
    students = []

    for student in student_collection.find({}, {"_id": 0}):  # EXCLUDE _id
        students.append(Student(**student))

    if not students:
        print("No students found.")
        return

    print("\n----- List of Students -----\n")
    for s in students:
        print(s.to_dict())

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


def update_Student(StudentId):
    field = input("Enter field to update: ")
    value = input("Enter new value: ")

    result = student_collection.update_one(
        {"StudentId": StudentId},   # FIXED
        {"$set": {field: value}}
    )

    if result.modified_count > 0:
        print("Student updated successfully.")
    else:
        print("No student found with the provided ID.")

def delete_Student(StudentId):
    result = student_collection.delete_one({"StudentId": StudentId})

    if result.deleted_count > 0:
        print("Student deleted successfully.")
    else:
        print("No student found with the provided ID.")

