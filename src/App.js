import './App.css';
import Viewer from './Viewer';
import FileSelector from './FileSelector';
import { useState } from 'react';

function App() {
  const [currentFile, setCurrentFile] = useState("");

  return (
    <div className="App">
      { currentFile !== "" ? <Viewer currentFile={currentFile} />
        : <FileSelector currentFile={currentFile} setCurrentFile={setCurrentFile} />
      }
    </div>
  );
}

export default App;
