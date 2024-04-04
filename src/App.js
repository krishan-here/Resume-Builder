import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ListItemButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';
import Education from './components/Education';
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
              <motion.div
                className='list-icon'
                animate={{ rotate: selectedIndex === index ? 0 : 90 }}>
                {selectedIndex === index ? <RemoveIcon /> : <AddIcon />}
              </motion.div>
            </ListItemButton>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className='App'>
      <div className='sidebar'>{DrawerList}</div>
      <AnimatePresence>
        {selectedIndex > -1 && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className='detail-input-wrapper'>
            {selectedIndex === 0 && <PersonalInfo />}
            {selectedIndex === 2 && <Education />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
