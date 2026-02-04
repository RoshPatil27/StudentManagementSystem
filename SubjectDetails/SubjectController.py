from SubjectDetails.SubjectModels import Subject
from database import subject_collection

def create_subject():
    subject = Subject(
        SubjectId=input("Enter Subject ID: "),
        SubjectName=input("Enter Subject Name: "),
        SubjectCode=input("Enter Subject Code: "),
        Description=input("Enter Description: "),
        Class=input("Enter Class: "),
        Section=input("Enter Section: "),
        SubjectType=input("Enter Subject Type: "),
        SubjectFee=input("Enter Subject Fee: "),
    )
    subject_collection.insert_one(subject.to_dict())
    return subject

def get_all_subjects():
    subjects = []   # list to store objects

    for subject_data in subject_collection.find({}, {"_id": 0}):
        subjects.append(Subject(**subject_data))

    if not subjects:
        print("No subjects found.")
        return

    print("------ List of Subjects ------")
    for sub in subjects:
        print(sub.to_dict())

    return subjects


def get_subject_by_id(subject_id):
    subject_data = subject_collection.find_one({"SubjectId": subject_id}, {"_id": 0})
    if not subject_data:
        print("No subject found with the provided ID.")
        return
    subj = Subject(**subject_data)
    print("\n ----- Subject Details -----")
    print(subj.to_dict())
    return subj

    
def update_subject(subject_id,):
    field = input("Enter field to update: ")
    value = input("Enter new value: ")

    result = subject_collection.update_one(
        {"SubjectId": subject_id}, 
        {"$set": {field: value}}
    )

    if result.modified_count > 0:
        print("Subject updated successfully.")
    else:
        print("No subject found with the provided ID.")

def delete_subject(subject_id):
    result = subject_collection.delete_one({"SubjectId": subject_id})
    if result.deleted_count > 0:
        print("Subject deleted successfully.")
    else:
        print("No subject found with the provided ID.")