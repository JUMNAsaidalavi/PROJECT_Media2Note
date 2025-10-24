import { useState } from 'react';
import Index from './assets/Index';
import Upload from './assets/Upload';
import Notes from './assets/Notes';
import LiveRecorder from './assets/LiveRecorder'; // Screen + mic together
import MicRecorder from './assets/MicRecorder';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './assets/style.css';

function App() {
  const [currentView, setCurrentView] = useState('index');

  return (
    <>
      {currentView === 'index' && (
        <Index
          onGetStarted={() => setCurrentView('upload')}
          onGoToLive={() => setCurrentView('live')}
          onRecordMic={() => setCurrentView('mic')}
          onImportUrl={() => setCurrentView('upload')}
        />
      )}

      {currentView === 'upload' && (
        <Upload
          onContinueToNotes={() => setCurrentView('notes')}
          onRecordLive={() => setCurrentView('live')} // 🆕 optional handler
        />
      )}

      {currentView === 'notes' && (
        <Notes />
      )}

      {currentView === 'live' && (
        <LiveRecorder />
      )}

      {currentView === 'mic' && (
        <MicRecorder />
      )}
    </>
  );
}

export default App;
