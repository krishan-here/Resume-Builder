import { LayoutGroup } from 'framer-motion';
import DisplayResume from './components/DisplayResume';
import Sidebar from './components/Sidebar';
import ResumeContextProvider from './context/resume';

function App() {
  return (
    <ResumeContextProvider>
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
