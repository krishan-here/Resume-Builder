import { PDFDownloadLink } from '@react-pdf/renderer';
import { useContext } from 'react';
import logo from '../assets/logo.png';
import { resumeContext } from '../context/resume';
import WordTemplate from './ResumeTemplate/Word/WordTemplate';

function Navbar() {
  const resumeCtx = useContext(resumeContext);

  return (
    <nav className='navbar-wrapper'>
      <div className='nav_brand'>
        <img
          src={logo}
          alt='logo'
        />
      </div>
      <div className='btn-grp'>
        <button className='btn btn-outline'>
          <PDFDownloadLink
            document={
              <WordTemplate
                info={resumeCtx.personalInfo}
                experience={resumeCtx.experience}
                projects={resumeCtx.projects}
                skills={resumeCtx.skills}
                education={resumeCtx.education}
              />
            }
            fileName='resume.pdf'
            className='btn-text'>
            Download
          </PDFDownloadLink>
        </button>
        {/* <button className='btn btn-dark'>Share</button> */}
      </div>
    </nav>
  );
}

export default Navbar;
