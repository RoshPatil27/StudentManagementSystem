from flask import Flask
from ExamSheetNCorrect.ExamRoutes import Exam_Routes
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

app = Flask(__name__)
app.register_blueprint(Exam_Routes)

if __name__ == "__main__":
    app.run(debug=True)

def Exam_main():
    while True:
        print("\nExam Management System")
        print("1. Create Exam")
        print("2. Get All Exams")
        print("3. Get Exam by ID")
        print("4. Update Exam by ID")
        print("5. Delete Exam by ID")
        print("6. Attend Exam")
        print("7. Correct Exam")
        print("8. Get Subject Exams")
        print("9. Get Student Exams")
        print("10. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            print("\nCreate Exam")
            create_exam()
        elif choice == "2":
            print("\nGet All Exams")
            get_all_exams()
        elif choice == "3":
            Exam_Id = input("Enter Exam ID: ")
            get_subject_exams(Exam_Id)
        elif choice == "4":
            Exam_Id = input("Enter Exam ID: ")
            update_exam(Exam_Id)
        elif choice == "5":
            Exam_Id = input("Enter Exam ID: ")
            delete_exam(Exam_Id)
        elif choice == "6":
            attend_exam()
        elif choice == "7":
            student_id = input("Enter Student ID: ")
            subject_id = input("Enter Subject ID: ")
            correct_exam(student_id, subject_id)
        elif choice == "8":
            Subject_Id = input("Enter Subject ID: ")
            get_subject_exams(Subject_Id)
        elif choice == "9":
            Student_Id = input("Enter Student ID: ")
            get_student_exams(Student_Id)
        elif choice == "10":
            break
        else:
            print("Invalid choice. Please try again.")

    print("Exiting the Exam Management System.")

if __name__ == "__main__":
    Exam_main()
