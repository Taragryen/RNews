import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RootRouting } from './app/RootRouting';
import './App.css';

/**根组件 */
function App() {
  return (
    <HashRouter>
      <RootRouting />
    </HashRouter>
  );
}

export default App;
