import Input from './UI/Input';

function PersonalInfo() {
  return (
    <>
      <div className='image-wrapper'>
        <p>Upload your photo</p>
        <div className='image-container'>
          <img
            src='https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png'
            alt='dummy'
          />
        </div>
        <button className='btn btn-outline'>Browse Photo</button>
      </div>

      <form>
        <Input
          label='Full Name'
          id='name'
        />
        <Input
          label='Job Title'
          id='title'
        />
        <Input
          label='Contact'
          id='contact'
        />
        <Input
          label='Email'
          id='email'
        />
      </form>
    </>
  );
}

export default PersonalInfo;
