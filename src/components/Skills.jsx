import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from 'react';
import { resumeContext } from '../context/resume';
import Input from './UI/Input';

function Skills({ goNextSection }) {
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);

  const resumeCtx = useContext(resumeContext);
  const currentSkill = resumeCtx.skills[selectedItemIdx];

  function handleInputChange(value) {
    resumeCtx.updateSkill(currentSkill.id, value);
  }

  function handleAddMoreClick(e) {
    e.preventDefault();
    if (currentSkill.skill === '') return;
    e.target.reset();
    resumeCtx.addSkill();
    setSelectedItemIdx(resumeCtx.skills.length);
  }

  function handleDelete() {
    resumeCtx.deleteSkill(currentSkill.id);
    setSelectedItemIdx((currentIdx) => {
      if (currentIdx === 0) return 0;
      if (currentIdx === resumeCtx.skills.length - 1) {
        return currentIdx - 1;
      }
      return currentIdx;
    });
  }

  function handleItemClick(index) {
    setSelectedItemIdx(index);
  }

  return (
    <div className='edu-section'>
      <ul className='list-container skills'>
        {resumeCtx.skills.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => handleItemClick(index)}
              className={`list-item ${
                selectedItemIdx === index ? 'selected' : ''
              }`}>
              {item.skill ? item.skill : 'Add Skill'}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleAddMoreClick}>
        <Input
          label='Skill'
          id='skill'
          skill='skill'
          onChange={(e) => handleInputChange(e.target.value)}
          value={currentSkill.skill}
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
    </div>
  );
}

export default Skills;
