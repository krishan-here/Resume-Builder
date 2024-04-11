import { motion } from 'framer-motion';
import WordDisplay from './ResumeTemplate/Word/WordDisplay';

function DisplayResume() {
  return (
    <div className='resume-wrapper'>
      <motion.div
        layout
        className='resume-preview'>
        <WordDisplay />
      </motion.div>
    </div>
  );
}

export default DisplayResume;
