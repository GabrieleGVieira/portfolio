import React from 'react';
import './styles/App.css';
import './i18n/i18n';
import Sidebar from './components/Sidebar/Sidebar';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/Projects/Projects';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

function App() {
  return (
    <div id="colorlib-page">
      <LanguageSwitcher />
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Timeline />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
