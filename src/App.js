import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/SideBar/sidebar';
import ResponsivNavigation from './components/Navbar/responsivNavigation';
import NavbarPath from './components/Navbar/navbarPath';
import IndexStyle from '../src/index.module.scss';


function App() {
  return (
    <BrowserRouter>
      <div className={IndexStyle.RootContainer}>
        <header className={IndexStyle.header}>
          <ResponsivNavigation />
        </header>
        <div className={IndexStyle.main}>
          <NavbarPath />
        </div>
        <div className={IndexStyle.footer}>
          <Sidebar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
