import { useState } from 'react';
import CodeEditor from './Editor';
import Preview from './Preview';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  const [yamlCode, setYamlCode] = useState(`# Home Page\nHome:\n  Hero:\n    - "Title >> big centered red": "**Hello WebLite**"`);
  const [htmlOutput, setHtmlOutput] = useState('');
  const [darkMode, setDarkMode] = useState(true);

const handleRun = async () => {
  const res = await fetch('https://weblite-tryit-backend.onrender.com/api/build', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ yaml: yamlCode }),
  });

  const data = await res.json();

  if (data.success) {
    const timestamp = Date.now(); // 🕒 Bust the cache
    const previewUrl = `https://weblite-tryit-backend.onrender.com/output/${data.startPage}?t=${timestamp}`;
    setHtmlOutput(previewUrl);
  } else {
    console.error(data.error);
  }
};


  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar onRunClick={handleRun} darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="container">
        <div className="left">
          <CodeEditor code={yamlCode} setCode={setYamlCode} darkMode={darkMode} />
        </div>
        <div className="right">
          <Preview html={htmlOutput} />
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
