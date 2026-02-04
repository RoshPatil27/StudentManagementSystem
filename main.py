from flask import Flask
from StudentDetails.StudentMainPage import Student_main
from SubjectDetails.SubjectMainPage import Subject_main
from ExamSheetNCorrect.ExamMain import Exam_main
from ResultDetails.ResultMain import Result_main

app = Flask(__name__)

def main():
    while True:
        print("\nStudent Management System")
        print("1. Student Details")
        print("2. Subject Details")
        print("3. Exam Details")
        print("4. Result Details")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            print("\nStudent Details")
            Student_main()
        elif choice == "2":
            print("\nSubject Details")
            Subject_main()
        elif choice == "3":
            print("\nExam Details")
            Exam_main()
        elif choice == "4":
            print("\nResult Details")
            Result_main()
        elif choice == "5":
            print("\nExiting...")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()