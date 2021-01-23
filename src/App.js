import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import FileUploader from './components/FileUploader';

function App() {
  return(
    <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        Resume Upload
      </div>

      <FileUploader />
    </div>
  );
}

export default App;
