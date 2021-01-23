import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import FileUploader from './components/FileUploader';
import Footer from './components/Footer';

function App() {
  return(
    <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        Resume Upload
      </div>
      <Header />
      <FileUploader />
      <Footer />
    </div>
  );
}

export default App;
