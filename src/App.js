import React from 'react';
import './index.css';
import api_key from './api_key';


function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
