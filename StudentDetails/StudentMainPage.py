from flask import Flask
from StudentDetails.StudentRoutes import Student_Routes
from StudentDetails.StudentController import create_student, get_all_students, get_student_by_id, update_Student, delete_Student

app = Flask(__name__)
app.register_blueprint(Student_Routes)

if __name__ == "__main__":
    app.run(debug=True)

def Student_main():
    while True:
        print("\nStudent Management System")
        print("1. Create Student")
        print("2. Get All Students")
        print("3. Get Student by ID")
        print("4. Update Student by ID")
        print("5. Delete Student by ID")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            print("\nCreate Student")
            create_student()
        elif choice == "2":
            print("\nGet All Students")
            get_all_students()
        elif choice == "3":
            Student_Id = input("Enter Student ID: ")
            get_student_by_id(Student_Id)
        elif choice == "4":
            Student_Id = input("Enter Student ID: ")
            update_Student(Student_Id)
        elif choice == "5":
            Student_Id = input("Enter Student ID: ")
            delete_Student(Student_Id)
        elif choice == "6":
            break
        else:
            print("Invalid choice. Please try again.")

    print("Goodbye!")

if __name__ == "__main__":
    Student_main()
