import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './component/HelloComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode> 
// );



// const data = (
//   <h1>Hello Man</h1>
// )

// ReactDOM.render(<h1>Hello Man</h1>,document.getElementById('root'));

// ReactDOM.render( <App />,document.getElementById('root'));

// function HelloComponent(){
//   return <h1>สวัสดี Component ครับผม</h1>
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <HelloComponent />
// );

// class HelloComponent extends React.Component{
//   render(){
//     return <h1> Hello react</h1>
//   }
// }


// example
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HelloComponent/>); 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode> 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
reportWebVitals();
