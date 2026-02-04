from pymongo import MongoClient

MONGO_URI = "mongodb://localhost:27017/"
client = MongoClient(MONGO_URI)

db = client["student_db"]
student_collection = db["student_collection"]
subject_collection = db["subject_collection"]
exam_collection = db["exam_collection"]
student_exam_collection = db["student_exam_collection"]
result_collection = db["result_collection"]

