from flask import Flask
from ResultDetails.ResultRoutes import Result_Routes
from ResultDetails.ResultController import (
    calculate_total_marks_student_result,
    calculate_student_result,
    get_all_results,
    get_student_results,
)

app = Flask(__name__)
app.register_blueprint(Result_Routes)

if __name__ == "__main__":
    app.run(debug=True)

def Result_main():
    while True:
        print("\nResult Management System")
        print("1. Calculate Total Marks")
        print("2. Calculate Result")
        print("3. Get All Results")
        print("4. Get Student Results")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            print("\nCalculate Total Marks")
            calculate_total_marks_student_result()
        elif choice == "2":
            print("\nCalculate Result")
            calculate_student_result()
        elif choice == "3":
            print("\nGet All Results")
            get_all_results()
        elif choice == "4":
            print("\nGet Student Results")
            student_id = input("Enter Student ID: ")
            get_student_results(student_id)
        elif choice == "5":
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    Result_main()