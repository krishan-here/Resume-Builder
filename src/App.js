import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ListItemButton, ListItemIcon } from '@mui/material';
import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (event, index) => {
    if (index === selectedIndex) setSelectedIndex(-1);
    else setSelectedIndex(index);
  };

  const DrawerList = (
    <div>
      <ul>
        {[
          'Personal Information',
          'Experience',
          'Education',
          'Projects',
          'Skills',
        ].map((text, index) => (
          <li
            className='sidebar-item'
            key={text}>
            <ListItemButton
              onClick={(event) => handleListItemClick(event, index)}>
              <p>{text}</p>
              <ListItemIcon>
                {selectedIndex === index ? <RemoveIcon /> : <AddIcon />}
              </ListItemIcon>
            </ListItemButton>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className='App'>
      <div className='sidebar'>{DrawerList}</div>
      {selectedIndex > -1 && (
        <div className='detail-input-wrapper'>
          {selectedIndex === 0 && <PersonalInfo />}
        </div>
      )}
    </div>
  );
}

export default App;
