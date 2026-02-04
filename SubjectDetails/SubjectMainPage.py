from flask import Flask
from SubjectDetails.SubjectRoutes import Subject_routes
from SubjectDetails.SubjectController import (
    create_subject,
    get_all_subjects,
    get_subject_by_id,
    update_subject,
    delete_subject,
)

app = Flask(__name__)
app.register_blueprint(Subject_routes)

if __name__ == "__main__":
    app.run(debug=True)

def Subject_main():
    while True:
        print("\nSubject Management System")
        print("1. Create Subject")
        print("2. Get All Subjects")
        print("3. Get Subject by ID")
        print("4. Update Subject by ID")
        print("5. Delete Subject by ID")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            print("\nCreate Subject")
            create_subject()
        elif choice == "2":
            print("\nGet All Subjects")
            get_all_subjects()
        elif choice == "3":
            Subject_Id = input("Enter Subject ID: ")
            get_subject_by_id(Subject_Id)
        elif choice == "4":
            Subject_Id = input("Enter Subject ID: ")
            update_subject(Subject_Id)
        elif choice == "5":
            Subject_Id = input("Enter Subject ID: ")
            delete_subject(Subject_Id)
        elif choice == "6":
            break
        else:
            print("Invalid choice. Please try again.")

    print("Goodbye!")

if __name__ == "__main__":
    Subject_main()
