import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/base/Footer';
import Header from './components/base/Header';
import DetailPage from './components/detailPage/DetailPage';
import Home from './components/Home';
import ProjectPage from './components/projectPage/ProjectPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Interior" element={<Home />} />
          <Route path="/Interior/projects" element={<ProjectPage />} />
          <Route path="/Interior/projects/:projectId" element={<DetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
