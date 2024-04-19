import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { resumeContext } from '../context/resume';
import Input from './UI/Input';

function Experience({ hideAnimation, goNextSection }) {
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);

  const resumeCtx = useContext(resumeContext);
  const currentExp = resumeCtx.experience[selectedItemIdx];

  function handleInputChange(key, value) {
    resumeCtx.updateExperience(currentExp.id, key, value);
  }

  function handleAddMoreClick(e) {
    e.preventDefault();
    if (currentExp.role === '') return;
    e.target.reset();
    resumeCtx.addExperience();
    setSelectedItemIdx(resumeCtx.experience.length);
  }

  function handleDelete() {
    resumeCtx.deleteExperience(currentExp.id);
    setSelectedItemIdx((currentIdx) => {
      if (currentIdx === 0) return 0;
      if (currentIdx === resumeCtx.experience.length - 1) {
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
        {resumeCtx.experience.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => handleItemClick(index)}
              className={`list-item ${
                selectedItemIdx === index ? 'selected' : ''
              }`}>
              Experience {index + 1}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleAddMoreClick}>
        <Input
          label='Role'
          id='role'
          required
          name='role'
          onChange={(e) => handleInputChange('role', e.target.value)}
          value={currentExp.role}
        />
        <Input
          label='Company'
          id='company'
          name='company'
          onChange={(e) => handleInputChange('company', e.target.value)}
          value={currentExp.company}
        />
        <Input
          label='Description'
          id='description'
          name='description'
          onChange={(e) => handleInputChange('description', e.target.value)}
          value={currentExp.description}
          textarea
        />
        <Input
          label='Enhance Description'
          id='description'
          aiInput
          show={true}
          name='description'
          onChange={(e) => handleInputChange('description', e.target.value)}
          value={currentExp.description}
          textarea
        />
        <div className='input-grp'>
          <Input
            label='Duration(From)'
            id='duration'
            type='month'
            onChange={(e) => handleInputChange('from', e.target.value)}
            value={currentExp.from}
            name='from'
          />
          <Input
            label='Duration(To)'
            id='duration'
            onChange={(e) => handleInputChange('to', e.target.value)}
            value={currentExp.to}
            type='month'
            name='to'
          />
        </div>

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

export default Experience;
