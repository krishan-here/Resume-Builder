import { useContext, useState } from 'react';
import { resumeContext } from '../context/resume';
import Input from './UI/Input';

function Education() {
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);

  const resumeCtx = useContext(resumeContext);
  const currentEducation = resumeCtx.education[selectedItemIdx];

  function handleInputChange(key, value) {
    resumeCtx.updateEducation(currentEducation.id, key, value);
  }

  function handleAddMoreClick(e) {
    e.preventDefault();
    e.target.reset();
    resumeCtx.addEducation();
    setSelectedItemIdx(resumeCtx.education.length);
  }

  function handleItemClick(index) {
    setSelectedItemIdx(index);
  }

  return (
    <div className='edu-section'>
      <ul className='list-container'>
        {resumeCtx.education.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => handleItemClick(index)}
              className={`list-item ${
                selectedItemIdx === index ? 'selected' : ''
              }`}>
              Education {index + 1}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleAddMoreClick}>
        <Input
          label='College/School'
          id='school'
          name='school'
          onChange={(e) => handleInputChange('school', e.target.value)}
          value={currentEducation.school}
        />
        <Input
          label='Degree/Course'
          id='course'
          name='course'
          onChange={(e) => handleInputChange('course', e.target.value)}
          value={currentEducation.course}
        />
        <Input
          label='Description'
          id='description'
          name='description'
          onChange={(e) => handleInputChange('description', e.target.value)}
          value={currentEducation.description}
          textarea
        />
        <div className='input-grp'>
          <Input
            label='Duration(From)'
            id='duration'
            type='date'
            onChange={(e) => handleInputChange('from', e.target.value)}
            value={currentEducation.from}
            name='from'
          />
          <Input
            label='Duration(To)'
            id='duration'
            onChange={(e) => handleInputChange('to', e.target.value)}
            value={currentEducation.to}
            type='date'
            name='to'
          />
        </div>
        <Input
          label='Grade'
          id='grade'
          onChange={(e) => handleInputChange('grade', e.target.value)}
          value={currentEducation.grade}
          name='grade'
        />

        <div className='btn-grp'>
          <button
            type='submit'
            className='btn btn-outline'>
            Add more
          </button>
          <button className='btn btn-dark'>Done</button>
        </div>
      </form>
    </div>
  );
}

export default Education;
