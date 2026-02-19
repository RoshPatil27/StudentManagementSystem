import React from 'react'
import { updateSubject } from "../../../API/SubjectApi";
import {
    UpdateSubjectWrapper,
    UpdateSubjectTitle,
    UpdateSubjectForm,
    UpdateSubjectField,
    UpdateSubjectLabel,
    UpdateSubjectInput,
    UpdateSubjectButton,
    ModulePOPUP,
    ModelOverlay,
    ModuleCloseButton
} from './UpdateSubject.styles'

const UpdateSubject = ({ subject, onClose, onUpdated }) => {
    const [form, setForm] = React.useState({ ...subject });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateSubject(subject.SubjectId, form);
        onUpdated();
        onClose();
    };

    return (
        <ModulePOPUP>
            <ModelOverlay onClick={onClose} />

            <UpdateSubjectWrapper>
                <ModuleCloseButton onClick={onClose}>X</ModuleCloseButton>
                <UpdateSubjectTitle>Update Subject Details</UpdateSubjectTitle>
                <UpdateSubjectForm onSubmit={handleSubmit}>
                    {Object.keys(form).map((key) => (
                        key !== "SubjectId" && (
                            <UpdateSubjectField key={key}>
                                <UpdateSubjectLabel>{key}</UpdateSubjectLabel>
                                <UpdateSubjectInput
                                    name={key}
                                    value={form[key]}
                                    onChange={handleChange}
                                />
                            </UpdateSubjectField>
                        )
                    ))}
                    <UpdateSubjectButton type="submit">
                        Save Changes
                    </UpdateSubjectButton>
                </UpdateSubjectForm>
            </UpdateSubjectWrapper>
        </ModulePOPUP>
    );
};

export default UpdateSubject;
