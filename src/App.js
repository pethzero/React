// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import React from "react";
import Transaction from './component/Transaction';
import FormComponent from './component/FormComponent';
// import DataTestApi from './component/DataTestApi';
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

// const Title = () => <h1> โปรแกรมบัญชีรายรับ - รายจ่าย </h1>
// const Description = () => <p> บันทึกข้อมูล </p>

// const Item = () => <li>พักโรงแรม <span>-5000</span></li>
// const Transaction = () =>{
//   return (
//     <ul>
//       <Item/>
//       <Item/>
//       <Item/>
//       <Item/>
//       <Item/>
//     </ul>
//     // <ul>
//     // <li>ค่าเดินทาง</li>
//     // <li>เงินเดือน</li>
//     // <li>เงินอาหาร</li>
//     // </ul>
//   )
// }
// let App = () => {
//   return (
//     //  <h1>Hello Computer Has Virus</h1>
//     // <React.Fragment> 
//     //   <article>
//     //    <h1> โปรแกรมบัญชีรายรับ - รายจ่าย </h1>
//     //    <p> บันทึกข้อมูล </p>
//     //    <ul>
//     //       <li>ค่าเดินทาง</li>
//     //       <li>เงินเดือน</li>
//     //       <li>เงินอาหาร</li>
//     //    </ul>
//     //    </article>
//     // </React.Fragment>
//     <div>
//       <Title/>
//       <Description/>
//       <Transaction/>
//     </div>
//   );
// }

let App = () => {
  // return (
  //   <div>
  //     <h1 style={{color:"red",textAlign:"center",fontSize:"1.5rem"}} >แอพบัญชี - รายจ่าย</h1>
  //     <FormComponent/>
  //     <Transaction/>
  //   </div>
  // );
  const design = {color:"red",textAlign:"center",fontSize:'1.5rem'}
  const [items,setItems] = useState([])
  // console.log([items,setItems])

  const onAddNewItem = (newItem)=>{
      // console.log("ข้อมูลที่ส่งมาจาก Form Component = ",newItem)
      setItems((prevItem)=>{
        // 
        // console.log("XXX Form Component = ",newItem,...prevItem)
        return [newItem,...prevItem]
        // return [...prevItem,newItem]
      })
      // console.log("Check",{items})
  }
  // console.log(onAddNewItem)
  return (
      <div className="container">
          <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
          <FormComponent onAddItem={onAddNewItem}/>
          <Transaction items = {items}/>
          {/* <DataTestApi/> */}
      </div>  
     
  );
}


export default App;
