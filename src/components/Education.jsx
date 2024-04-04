import { useState } from 'react';
import Input from './UI/Input';

function Education() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({ index: -1, item: {} });

  function handleAddMoreClick(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    e.target.reset();
    setSelectedItem({ index: -1, item: data });
    setItems((items) => [...items, data]);
  }

  function handleItemClick(index) {
    setSelectedItem({
      index: index,
      item: items[index],
    });
  }

  return (
    <div className='edu-section'>
      <ul className='list-container'>
        {items.map((item, index) => {
          return (
            <li
              onClick={() => handleItemClick(index)}
              className={`list-item ${
                selectedItem.index === index ? 'selected' : ''
              }`}>
              Education {index + 1}
            </li>
          );
        })}
        <li
          className={`list-item ${
            selectedItem.index === -1 ? 'selected' : ''
          }`}>
          Education {items.length + 1}
        </li>
      </ul>
      <form
        action=''
        onSubmit={handleAddMoreClick}>
        <Input
          label='College/School'
          id='school'
          name='school'
          value={selectedItem.item.school || ''}
        />
        <Input
          label='Degree/Course'
          id='course'
          name='course'
          value={selectedItem.item.course || ''}
        />
        <Input
          label='Description'
          id='description'
          name='description'
          value={selectedItem.item.description || ''}
          textarea
        />
        <div className='input-grp'>
          <Input
            label='Duration(From)'
            id='duration'
            type='date'
            value={selectedItem.item.from || ''}
            name='from'
          />
          <Input
            label='Duration(To)'
            id='duration'
            value={selectedItem.item.to || ''}
            type='date'
            name='to'
          />
        </div>
        <Input
          label='Grade'
          id='grade'
          value={selectedItem.item.grade || ''}
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
