import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);


// // 변경시 새로고침 안해도 적용
// if( module.hot ){
//   module.hot.accept();
// }
