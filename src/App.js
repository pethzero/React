// import logo from './logo.svg';
// import './App.css';
import React from "react";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Title = () => <h1> โปรแกรมบัญชีรายรับ - รายจ่าย </h1>
const Description = () => <p> บันทึกข้อมูล </p>
const Transaction = () =>{
  return (
    <ul>
    <li>ค่าเดินทาง</li>
    <li>เงินเดือน</li>
    <li>เงินอาหาร</li>
    </ul>
  )
}
let App = () => {
  return (
    //  <h1>Hello Computer Has Virus</h1>
    // <React.Fragment> 
    //   <article>
    //    <h1> โปรแกรมบัญชีรายรับ - รายจ่าย </h1>
    //    <p> บันทึกข้อมูล </p>
    //    <ul>
    //       <li>ค่าเดินทาง</li>
    //       <li>เงินเดือน</li>
    //       <li>เงินอาหาร</li>
    //    </ul>
    //    </article>
    // </React.Fragment>
    <div>
      <Title/>
      <Description/>
      <Transaction/>
    </div>
  );
}

export default App;
