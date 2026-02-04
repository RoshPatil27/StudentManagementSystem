class Exam:
    def __init__(self, subject_id, exam_date, questions, correct_answers):
        self.subject_id = subject_id
        self.exam_date = exam_date
        self.questions = questions              # List
        self.correct_answers = correct_answers  # List

    def to_dict(self):
        return {
            "subject_id": self.subject_id,
            "exam_date": self.exam_date,
            "questions": self.questions,
            "correct_answers": self.correct_answers
        }

