import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { resumeContext } from '../context/resume';
import Input from './UI/Input';

function Education({ hideAnimation, goNextSection }) {
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);

  const resumeCtx = useContext(resumeContext);
  const currentEducation = resumeCtx.education[selectedItemIdx];

  function handleInputChange(key, value) {
    resumeCtx.updateEducation(currentEducation.id, key, value);
  }

  function handleAddMoreClick(e) {
    e.preventDefault();
    if (currentEducation.course === '') return;
    e.target.reset();
    resumeCtx.addEducation();
    setSelectedItemIdx(resumeCtx.education.length);
  }

  function handleDelete() {
    resumeCtx.deleteEducation(currentEducation.id);
    setSelectedItemIdx((currentIdx) => {
      if (currentIdx === 0) return 0;
      if (currentIdx === resumeCtx.education.length - 1) {
        return currentIdx - 1;
      }
      return currentIdx;
    });
  }

  function handleItemClick(index) {
    setSelectedItemIdx(index);
  }

  return (
    <motion.div
      initial={!hideAnimation && { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className='edu-section'>
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
          label='Degree/Course'
          id='course'
          required
          name='course'
          onChange={(e) => handleInputChange('course', e.target.value)}
          value={currentEducation.course}
        />
        <Input
          label='College/School'
          id='school'
          name='school'
          onChange={(e) => handleInputChange('school', e.target.value)}
          value={currentEducation.school}
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
            type='month'
            onChange={(e) => handleInputChange('from', e.target.value)}
            value={currentEducation.from}
            name='from'
          />
          <Input
            label='Duration(To)'
            id='duration'
            onChange={(e) => handleInputChange('to', e.target.value)}
            value={currentEducation.to}
            type='month'
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
            type='button'
            onClick={handleDelete}
            className='btn btn-outline btn-icon'>
            <DeleteIcon />
          </button>
          <button
            type='submit'
            className='btn btn-outline'>
            Add New
          </button>
          <button
            className='btn btn-dark'
            type='button'
            onClick={goNextSection}>
            Done
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default Education;
