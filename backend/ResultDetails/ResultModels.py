from StudentDetails.StudentModels import  Student
from SubjectDetails.SubjectModels import Subject

class Result:
    def __init__(self, StudentId, SubjectId, Marks, Grade, Remarks):
        self.StudentId = Student(StudentId)
        self.SubjectId = Subject(SubjectId)
        self.Marks = Marks
        self.Grade = Grade
        self.Remarks = Remarks

    def to_dict(self):
        
        return {
            "StudentId": self.StudentId,
            "SubjectId": self.SubjectId,
            "Marks": self.Marks,
            "Grade": self.Grade,
            "Remarks": self.Remarks
        }
    
    