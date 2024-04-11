// import { PDFViewer } from '@react-pdf/renderer';
import { motion } from 'framer-motion';
// import { useContext } from 'react';
// import { resumeContext } from '../context/resume';
import WordDisplay from './ResumeTemplate/Word/WordDisplay';

function DisplayResume() {
  // const resumeCtx = useContext(resumeContext);

  return (
    <div className='resume-wrapper'>
      <motion.div
        layout
        className='resume-preview'>
        {/* <PDFViewer
          showToolbar={false}
          width='100%'
          height='100%'>
          <WordTemplate
            info={resumeCtx.personalInfo}
            experience={resumeCtx.experience}
            projects={resumeCtx.projects}
            skills={resumeCtx.skills}
            education={resumeCtx.education}
          />
        </PDFViewer> */}
        <WordDisplay />
      </motion.div>
    </div>
  );
}

export default DisplayResume;
