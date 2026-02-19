from SubjectDetails.SubjectModels import Subject
from database import subject_collection

def create_subject(data):
    subject = Subject(**data)
    subject_collection.insert_one(subject.to_dict())
    return subject

def get_all_subjects():
    subjects = []
    for subject in subject_collection.find({}, {"_id": 0}):
        subjects.append(Subject(**subject))

    return subjects

def get_subject_by_id(id):
    subject = subject_collection.find_one({"SubjectId": id}, {"_id": 0})
    if subject:
        return Subject(**subject)
    else:
        return None
    

def update_subject(SubjectId, data):
    result = subject_collection.update_one(
        {"SubjectId": SubjectId},
        {"$set": data}
    )
    return result.modified_count > 0

def delete_subject(SubjectId):
    result = subject_collection.delete_one({"SubjectId": SubjectId})
    return result.deleted_count > 0



def Search_Subject_by_Id(SubjectId):
    subject_data = subject_collection.find_one({"SubjectId": SubjectId}, {"_id": 0})

    if not subject_data:
        print("No subject found with the provided ID.")
        return
    
    # Convert dict → Subject object
    subject = Subject(**subject_data)
    print("\n----- Subject Details -----\n")
    print(subject.to_dict())
    return subject



def Search_Subject_by_Name(SubjectName):
    subject_data = subject_collection.find_one({"SubjectName": SubjectName}, {"_id": 0})

    if not subject_data:
        print("No subject found with the provided name.")
        return
    
    # Convert dict → Subject object
    subject = Subject(**subject_data)
    print("\n----- Subject Details -----\n")
    print(subject.to_dict())
    return subject
