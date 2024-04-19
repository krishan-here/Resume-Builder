import { GoogleGenerativeAI } from '@google/generative-ai';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useContext } from 'react';
import logo from '../assets/logo.png';
import { resumeContext } from '../context/resume';
import WordTemplate from './ResumeTemplate/Word/WordTemplate';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

function Navbar() {
  const resumeCtx = useContext(resumeContext);

  async function handleAI() {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt =
      'I wanted to put a sentence in my resume as an experience description. Modify the sentence with more professional and effective way. The sentence is: ' +
      resumeCtx.experience[0].description;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
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
          onClick={handleAI}>
          <svg
            class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon-color css-i4bv87-MuiSvgIcon-root'
            focusable='false'
            aria-hidden='true'
            viewBox='0 0 24 24'
            data-testid='AutoAwesomeIcon'>
            <defs>
              <linearGradient
                id='gradient'
                x1='0'
                y1='0'
                x2='100%'
                y2='0'>
                <stop
                  offset='20%'
                  style={{ stopColor: '#ec8958' }}
                />
                <stop
                  offset='60%'
                  style={{ stopColor: '#af6dac' }}
                />
                <stop
                  offset='100%'
                  style={{ stopColor: '#3794dd' }}
                />
              </linearGradient>
            </defs>
            <path d='m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z'></path>
          </svg>
          Enhance AI
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
