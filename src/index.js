import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


ReactDOM.render(
  
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => console.log('helloooooooo')} />
  </div>,
  document.getElementById('root')
);