class Subject:
    def __init__(self, SubjectId, SubjectName, SubjectCode, Description, Class, Section, SubjectType, SubjectFee):
        self.SubjectId = SubjectId
        self.SubjectName = SubjectName
        self.SubjectCode = SubjectCode
        self.Description = Description
        self.Class = Class
        self.Section = Section
        self.SubjectType = SubjectType
        self.SubjectFee = SubjectFee

    def to_dict(self):
        return {
            "SubjectId": self.SubjectId,
            "SubjectName": self.SubjectName,
            "SubjectCode": self.SubjectCode,
            "Description": self.Description,
            "Class": self.Class,
            "Section": self.Section,
            "SubjectType": self.SubjectType,
            "SubjectFee": self.SubjectFee,
        }
        