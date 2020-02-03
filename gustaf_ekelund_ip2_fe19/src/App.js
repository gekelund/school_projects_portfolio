import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar/navbar';
import AboutMe from './components/aboutMe';
import Education from './components/education';
import Experience from './components/experience';
import Home from './components/home';
import Contact from './components/contact';
import Skills from './components/skills';
import AppStyle from './styles/AppStyle.module.scss';



function App() {
  return (
    <BrowserRouter>
      <div className={AppStyle.App}>
        <header className={AppStyle.header}>
          <Navbar />
        </header>
        <div className={AppStyle.sidebar}>
          <Sidebar />
        </div>
        <main className={AppStyle.main}>
          <Route exact path='/' component={Home} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/education' component={Education} />
          <Route path='/experience' component={Experience} />
          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
