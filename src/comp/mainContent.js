import React from 'react';
import './mainContent.css';

const MainContent = ({pageName}) => {
  return (
    <div className='main-content'>
        <main> {pageName} </main>
    </div>
  );
}

export default MainContent;
