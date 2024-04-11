import { createContext, useState } from 'react';
import {
  INITIAL_EDUCATION_DATA,
  INITIAL_EXPERIENCE_DATA,
  INITIAL_PROJECT_DATA,
} from './constant';

export const resumeContext = createContext({
  personalInfo: {
    name: '',
    jobTitle: '',
    image: '',
    contact: '',
    email: '',
  },
  updatePersonalInfo: (key, value) => {},

  education: [],
  addEducation: (data) => {},
  deleteEducation: (id) => {},
  updateEducation: (id, key, value) => {},

  experience: [],
  addExperience: (data) => {},
  deleteExperience: (id) => {},
  updateExperience: (id, key, value) => {},

  projects: [],
  addProject: (data) => {},
  deleteProject: (id) => {},
  updateProject: (id, key, value) => {},

  skills: [],
  addSkill: (data) => {},
  deleteSkill: (id) => {},
  updateSkill: (id, value) => {},
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
      ...INITIAL_EDUCATION_DATA,
    },
  ]);
  const [experience, setExperience] = useState([
    {
      id: 'exp_' + Math.floor(Math.random() * 100),
      ...INITIAL_EXPERIENCE_DATA,
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 'proj_' + Math.floor(Math.random() * 100),
      ...INITIAL_PROJECT_DATA,
    },
  ]);
  const [skills, setSkills] = useState([
    {
      id: 'skill_' + Math.floor(Math.random() * 100),
      skill: '',
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
      ...INITIAL_EDUCATION_DATA,
    };
    setEducation((educations) => [
      ...educations.map((education) => {
        return { ...education };
      }),
      newEducation,
    ]);
  }

  function addExperience() {
    const newExp = {
      id: 'exp_' + Math.floor(Math.random() * 100),
      ...INITIAL_EXPERIENCE_DATA,
    };
    setExperience((experiences) => [
      ...experiences.map((experience) => {
        return { ...experience };
      }),
      newExp,
    ]);
  }

  function addProject() {
    const newProject = {
      id: 'proj_' + Math.floor(Math.random() * 100),
      ...INITIAL_PROJECT_DATA,
    };
    setProjects((projects) => [
      ...projects.map((project) => {
        return { ...project };
      }),
      newProject,
    ]);
  }

  function addSkill() {
    const newSkill = {
      id: 'skill_' + Math.floor(Math.random() * 100),
      skill: '',
    };
    setSkills((skills) => [
      ...skills.map((skill) => {
        return { ...skill };
      }),
      newSkill,
    ]);
  }

  function updateEducation(id, key, value) {
    setEducation((educations) => {
      const updatedEducation = [
        ...educations.map((education) => {
          return { ...education };
        }),
      ];
      const index = updatedEducation.findIndex((item) => item.id === id);
      updatedEducation[index][key] = value;
      return updatedEducation;
    });
  }

  function updateExperience(id, key, value) {
    setExperience((experiences) => {
      const updatedExp = [
        ...experiences.map((experience) => {
          return { ...experience };
        }),
      ];
      const index = updatedExp.findIndex((item) => item.id === id);
      updatedExp[index][key] = value;
      return updatedExp;
    });
  }

  function updateProject(id, key, value) {
    setProjects((projects) => {
      const updatedProject = [
        ...projects.map((project) => {
          return { ...project };
        }),
      ];
      const index = updatedProject.findIndex((item) => item.id === id);
      updatedProject[index][key] = value;
      return updatedProject;
    });
  }

  function updateSkill(id, value) {
    setSkills((skills) => {
      const updatedSkills = [
        ...skills.map((skill) => {
          return { ...skill };
        }),
      ];
      const index = updatedSkills.findIndex((item) => item.id === id);
      updatedSkills[index].skill = value;
      return updatedSkills;
    });
  }

  function deleteEducation(id) {
    setEducation((educations) => {
      if (
        educations.length === 1 &&
        educations.findIndex((item) => item.id === id) !== -1
      ) {
        const newEducation = {
          id: 'edu_' + Math.floor(Math.random() * 100),
          ...INITIAL_EDUCATION_DATA,
        };
        return [newEducation];
      }
      return [...educations.filter((item) => item.id !== id)];
    });
  }

  function deleteExperience(id) {
    setExperience((experiences) => {
      if (
        experiences.length === 1 &&
        experiences.findIndex((item) => item.id === id) !== -1
      ) {
        const newExp = {
          id: 'exp_' + Math.floor(Math.random() * 100),
          ...INITIAL_EXPERIENCE_DATA,
        };
        return [newExp];
      }
      return [...experiences.filter((item) => item.id !== id)];
    });
  }

  function deleteProject(id) {
    setProjects((projects) => {
      if (
        projects.length === 1 &&
        projects.findIndex((item) => item.id === id) !== -1
      ) {
        const newExp = {
          id: 'proj_' + Math.floor(Math.random() * 100),
          ...INITIAL_PROJECT_DATA,
        };
        return [newExp];
      }
      return [...projects.filter((item) => item.id !== id)];
    });
  }

  function deleteSkill(id) {
    setSkills((skills) => {
      if (
        skills.length === 1 &&
        skills.findIndex((item) => item.id === id) !== -1
      ) {
        const newSkill = {
          id: 'skill_' + Math.floor(Math.random() * 100),
          skill: '',
        };
        return [newSkill];
      }
      return [...skills.filter((item) => item.id !== id)];
    });
  }

  const contextValue = {
    personalInfo,
    updatePersonalInfo,

    education,
    updateEducation,
    addEducation,
    deleteEducation,

    experience,
    updateExperience,
    addExperience,
    deleteExperience,

    projects,
    updateProject,
    addProject,
    deleteProject,

    skills,
    deleteSkill,
    updateSkill,
    addSkill,
  };

  return (
    <resumeContext.Provider value={contextValue}>
      {children}
    </resumeContext.Provider>
  );
}

export default ResumeContextProvider;
