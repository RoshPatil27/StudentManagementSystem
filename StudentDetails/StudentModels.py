class Student:
    def __init__(self, StudentId, FullName, RollNo, Email, Address, ContactNo, DOB, Gender, Class, Section, emergencyName, emergencyContact, emergencyRelation, bloodGroup,):
        self.StudentId = StudentId
        self.FullName = FullName
        self.RollNo = RollNo
        self.Email = Email
        self.Address = Address
        self.ContactNo = ContactNo
        self.DOB = DOB
        self.Gender = Gender
        self.Class = Class
        self.Section = Section
        self.emergencyName = emergencyName
        self.emergencyContact = emergencyContact
        self.emergencyRelation = emergencyRelation
        self.bloodGroup = bloodGroup

    def to_dict(self):
        return {
            "StudentId": self.StudentId,
            "FullName": self.FullName,
            "RollNo": self.RollNo,
            "Email": self.Email,
            "Address": self.Address,
            "ContactNo": self.ContactNo,
            "DOB": self.DOB,
            "Gender": self.Gender,
            "Class": self.Class,
            "Section": self.Section,
            "emergencyName": self.emergencyName,
            "emergencyContact": self.emergencyContact,
            "emergencyRelation": self.emergencyRelation,
            "bloodGroup": self.bloodGroup,
        }
    
