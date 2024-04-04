import { createContext, useState } from 'react';

export const resumeContext = createContext({
  personalInfo: { name: '', jobTitle: '', image: '', contact: '', email: '' },
  education: [],
  updatePersonalInfo: (key, value) => {},
  addEducation: (data) => {},
  deleteEducation: (id) => {},
  updateEducation: (id, key, value) => {},
});

function ResumeContextProvider({ children }) {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    jobTitle: '',
    image: '',
    contact: '',
    email: '',
  });
  const [education, setEducation] = useState([
    {
      id: 'edu_' + Math.floor(Math.random() * 100),
      school: '',
      course: '',
      description: '',
      grade: '',
      from: '',
      to: '',
    },
  ]);

  function updatePersonalInfo(key, value) {
    setPersonalInfo((info) => {
      return {
        ...info,
        [key]: value,
      };
    });
  }

  function addEducation() {
    const newEducation = {
      id: 'edu_' + Math.floor(Math.random() * 100),
      school: '',
      course: '',
      description: '',
      grade: '',
      from: '',
      to: '',
    };
    setEducation((educations) => [...educations, newEducation]);
  }

  function updateEducation(id, key, value) {
    setEducation((educations) => {
      const updatedEducation = [...educations];
      const index = updatedEducation.findIndex((item) => item.id === id);
      updatedEducation[index][key] = value;
      return updatedEducation;
    });
  }

  function deleteEducation(id) {
    setEducation((educations) => {
      return [...educations.filter((item) => item.id !== id)];
    });
  }

  const contextValue = {
    personalInfo,
    updatePersonalInfo,
    education,
    updateEducation,
    addEducation,
    deleteEducation,
  };

  return (
    <resumeContext.Provider value={contextValue}>
      {children}
    </resumeContext.Provider>
  );
}

export default ResumeContextProvider;
