import { PDFDownloadLink } from '@react-pdf/renderer';
import { useContext } from 'react';
import logo from '../assets/logo.png';
import { resumeContext } from '../context/resume';
import WordTemplate from './ResumeTemplate/Word/WordTemplate';

function Navbar() {
  const resumeCtx = useContext(resumeContext);

  function handleLinkedInClick() {
    const your_callback_url = 'https://resume-builder-72afc.web.app';
    const your_client_id = '86632cjufnv0bs';
    const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${your_client_id}&redirect_uri=${your_callback_url}&state=foobar&scope=liteprofile%20emailaddress%20w_member_social`;
    window.open(url, '_blank');
  }

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
        <button
          className='btn btn-dark'
          onClick={handleLinkedInClick}>
          Get LinkedIn Data
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
