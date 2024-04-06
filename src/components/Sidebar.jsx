import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ListItemButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import '../App.css';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Project from './Project';
import Skills from './Skills';

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (index) => {
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
            <ListItemButton onClick={() => handleListItemClick(index)}>
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
  let content;
  switch (selectedIndex) {
    case 0:
      content = <PersonalInfo goNextSection={() => handleListItemClick(1)} />;
      break;
    case 1:
      content = <Experience goNextSection={() => handleListItemClick(2)} />;
      break;
    case 2:
      content = <Education goNextSection={() => handleListItemClick(3)} />;
      break;
    case 3:
      content = <Project goNextSection={() => handleListItemClick(4)} />;
      break;
    case 4:
      content = <Skills goNextSection={() => handleListItemClick(0)} />;
      break;
    default:
      content = null;
  }
  return (
    <div className='sidebar_wrapper'>
      <div className='sidebar'>{DrawerList}</div>
      <AnimatePresence>
        {selectedIndex > -1 && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className='detail-input-wrapper'>
            <AnimatePresence>{content}</AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
