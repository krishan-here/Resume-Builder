import Sidebar from './components/Sidebar';
import ResumeContextProvider from './context/resume';

function App() {
  return (
    <ResumeContextProvider>
      <div className='App'>
        <Sidebar />
      </div>
    </ResumeContextProvider>
  );
}

export default App;
