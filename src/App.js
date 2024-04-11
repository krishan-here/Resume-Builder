import { LayoutGroup } from 'framer-motion';
import DisplayResume from './components/DisplayResume';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ResumeContextProvider from './context/resume';

function App() {
  return (
    <ResumeContextProvider>
      <Navbar />
      <div className='App'>
        <LayoutGroup>
          <Sidebar />
          <DisplayResume />
        </LayoutGroup>
      </div>
    </ResumeContextProvider>
  );
}

export default App;
