import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from 'react';
import { resumeContext } from '../context/resume';
import Input from './UI/Input';

function Project({ goNextSection }) {
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);

  const resumeCtx = useContext(resumeContext);
  const currentProject = resumeCtx.projects[selectedItemIdx];

  function handleInputChange(key, value) {
    resumeCtx.updateProject(currentProject.id, key, value);
  }

  function handleAddMoreClick(e) {
    e.preventDefault();
    e.target.reset();
    resumeCtx.addProject();
    setSelectedItemIdx(resumeCtx.projects.length);
  }

  function handleDelete() {
    resumeCtx.deleteProject(currentProject.id);
    setSelectedItemIdx((currentIdx) => {
      if (currentIdx === 0) return 0;
      if (currentIdx === resumeCtx.projects.length - 1) {
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
      <ul className='list-container'>
        {resumeCtx.projects.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => handleItemClick(index)}
              className={`list-item ${
                selectedItemIdx === index ? 'selected' : ''
              }`}>
              Project {index + 1}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleAddMoreClick}>
        <Input
          label='Name'
          id='name'
          name='name'
          onChange={(e) => handleInputChange('name', e.target.value)}
          value={currentProject.name}
        />
        <Input
          label='Description'
          id='description'
          name='description'
          onChange={(e) => handleInputChange('description', e.target.value)}
          value={currentProject.description}
          textarea
        />
        <div className='input-grp'>
          <Input
            label='Duration(From)'
            id='duration'
            type='date'
            onChange={(e) => handleInputChange('from', e.target.value)}
            value={currentProject.from}
            name='from'
          />
          <Input
            label='Duration(To)'
            id='duration'
            onChange={(e) => handleInputChange('to', e.target.value)}
            value={currentProject.to}
            type='date'
            name='to'
          />
        </div>
        <Input
          label='Link'
          id='link'
          onChange={(e) => handleInputChange('link', e.target.value)}
          value={currentProject.link}
          name='link'
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

export default Project;
