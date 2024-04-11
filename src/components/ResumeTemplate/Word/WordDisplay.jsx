import { useContext } from 'react';
import LinkImage from '../../../assets/link.png';
import { resumeContext } from '../../../context/resume';
import { dateFormatter } from '../../../utils/format';
import s from './Word.module.css';

function WordDisplay() {
  const resumeCtx = useContext(resumeContext);
  const { personalInfo, education, experience, projects, skills } = resumeCtx;

  return (
    <div className={s.page}>
      <div className={`${s.main_head} ${personalInfo.image ? s.center : ''}`}>
        <div className={s.main_detail}>
          <h1>{personalInfo.name}</h1>
          <div className={s.contact_section}>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.contact}</p>
          </div>
        </div>
        {personalInfo.image && (
          <div className={s.main_img}>
            <img
              src={personalInfo.image}
              alt='profile'
            />
          </div>
        )}
      </div>

      {experience.length && experience[0].role && (
        <div className={s.section}>
          <div className={s.header}>
            <h2>Experience</h2>
          </div>

          <ul>
            {experience.map((exp) => {
              if (!exp.role) return null;
              return (
                <li
                  className={s.list_item}
                  key={exp.id}>
                  <div className={s.list_item_header}>
                    <h3>
                      {exp.role} {exp.company ? ' | ' + exp.company : ''}
                    </h3>
                    {exp.from && (
                      <p className={s.duration}>
                        {dateFormatter(exp.from)} -{' '}
                        {exp.to ? dateFormatter(exp.to) : 'Present'}
                      </p>
                    )}
                  </div>
                  <p>{exp.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {projects.length && projects[0].name && (
        <div className={s.section}>
          <div className={s.header}>
            <h2>Projects</h2>
          </div>

          <ul>
            {projects.map((project) => {
              if (!project.name) return null;
              return (
                <li
                  className={s.list_item}
                  key={project.id}>
                  <div className={s.list_item_header}>
                    <h3>
                      {project.name}{' '}
                      {project.link && (
                        <img
                          src={LinkImage}
                          alt='link'
                        />
                      )}
                    </h3>
                    {project.from && (
                      <p className={s.duration}>
                        {dateFormatter(project.from)} -{' '}
                        {project.to ? dateFormatter(project.to) : 'Present'}
                      </p>
                    )}
                  </div>
                  <p>{project.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {skills.length && skills[0].skill && (
        <div className={s.section}>
          <div className={s.header}>
            <h2>Skills</h2>
          </div>

          <ul className={s.skill_list}>
            {skills.map((skill) => {
              if (!skill.skill) return null;
              return (
                <li key={skill.id}>
                  <p>{skill.skill}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {education.length && education[0].course && (
        <div className={s.section}>
          <div className={s.header}>
            <h2>Education</h2>
          </div>

          <ul>
            {education.map((edu) => {
              if (!edu.course) return null;
              return (
                <li
                  className={s.list_item}
                  key={edu.id}>
                  <div className={s.list_item_header}>
                    <h3>
                      {edu.course} {edu.school ? ' | ' + edu.school : ''}
                    </h3>
                    {edu.from && (
                      <p className={s.duration}>
                        {dateFormatter(edu.from)} -{' '}
                        {edu.to ? dateFormatter(edu.to) : 'Present'}
                      </p>
                    )}
                  </div>
                  <p className={s.edu_grade}>{edu.grade}</p>
                  <p className={s.edu_description}>{edu.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WordDisplay;
