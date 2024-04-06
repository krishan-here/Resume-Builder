import { motion } from 'framer-motion';
import WordTemplate from './ResumeTemplate/Word/Word';

function DisplayResume() {
  return (
    <div className='resume-wrapper'>
      <motion.div
        layout
        className='resume-preview'>
        <WordTemplate />
      </motion.div>
    </div>
  );
}

export default DisplayResume;
