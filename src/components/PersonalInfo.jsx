import { motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import dummyProfile from '../assets/dummy_profile.png';
import { resumeContext } from '../context/resume';
import Input from './UI/Input';

function PersonalInfo({ goNextSection }) {
  const fileInputRef = useRef();
  const [imageURL, setImageURL] = useState('');
  const resumeCtx = useContext(resumeContext);

  useEffect(() => {
    setImageURL(resumeCtx.personalInfo.image);
  }, [resumeCtx.personalInfo.image]);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      console.log(fileUrl);
      handleInputChange('image', fileUrl);
      setImageURL(fileUrl);
    }
  }

  function handleBrowsePhoto() {
    fileInputRef.current.click();
  }

  function handleInputChange(key, value) {
    resumeCtx.updatePersonalInfo(key, value);
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}>
      <div className='image-wrapper'>
        <p>Upload your photo</p>
        <div className='image-container'>
          <img
            src={imageURL || dummyProfile}
            alt='dummy'
          />
        </div>
        <input
          type='file'
          accept='image/*' // Accept only image files
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <button
          className='btn btn-outline'
          onClick={handleBrowsePhoto}>
          Browse Photo
        </button>
      </div>

      <form>
        <Input
          label='Full Name'
          id='name'
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
        <Input
          label='Job Title'
          id='title'
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
        <Input
          label='Contact'
          id='contact'
          onChange={(e) => handleInputChange('contact', e.target.value)}
        />
        <Input
          label='Email'
          id='email'
          onChange={(e) => handleInputChange('email', e.target.value)}
        />

        <button
          className='btn btn-dark py-2'
          type='button'
          onClick={goNextSection}>
          Done
        </button>
      </form>
    </motion.div>
  );
}

export default PersonalInfo;
