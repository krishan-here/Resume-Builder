import { motion } from 'framer-motion';
import DisplayResume from './components/DisplayResume';
import Sidebar from './components/Sidebar';
import ResumeContextProvider from './context/resume';

function App() {
  return (
    <ResumeContextProvider>
      <motion.div
        className='App'
        layout>
        <Sidebar />
        <DisplayResume />
      </motion.div>
    </ResumeContextProvider>
  );
}

export default App;
