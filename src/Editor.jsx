import Editor from '@monaco-editor/react';

function CodeEditor({ code, setCode,darkMode }) {
  return (
    <Editor
      height="90vh"
      defaultLanguage="yaml"
      defaultValue={code}
      value={code}
      onChange={(value) => setCode(value)}
      theme={darkMode ? "vs-dark" : "light"}
    />
  );
}

export default CodeEditor;
