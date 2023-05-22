import Item from "./Item";
import  '../stylesheet/Transaction.css';
// import { v4 as uuidv4 } from 'uuid';
// const Transaction = () =>{
//     const data = [
//       {id:1,title:"ค่ารักษาพยาบาล",amount:2000},
//       {id:2,title:"ค่าน้ำมัน",amount:5000},
//       {id:3,title:"ค่าเช่า",amount:8000},
//       {id:4,title:"เงินเดือน",amount:9999},
//       {id:5,title:"จ่ายประกัน",amount:1111},
//       {id:6,title:"เดินทาง",amount:777}
//     ]
//     return (
//       <ul className="item-list">
//         {data.map((element)=>{
//           // return <Item title={element.title} amount={element.amount} />
//           return <Item {...element} key = {element.id} />
//         })}
//         {/* <Item title={data[0].title} amount={data[0].amount} />
//         <Item title={data[1].title} amount={data[1].amount} />
//         <Item title={data[2].title} amount={data[2].amount} />
//         <Item title={data[3].title} amount={data[3].amount} />
//         <Item title={data[4].title} amount={data[4].amount} /> */}
//         {/* <Item title="ค่ารักษาพยาบาล" amount="200"/>
//         <Item title="เงินเดือน" amount="25000"/>
//         <Item title="เดินทาง" amount="3500"/>
//         <Item title="ค่าเช่า" amount="50000"/> */}
//         {/* <Item/>
//         <Item/>
//         <Item/>
//         <Item/> */}
//       </ul>
//       // <ul>
//       // <li>ค่าเดินทาง</li>
//       // <li>เงินเดือน</li>
//       // <li>เงินอาหาร</li>
//       // </ul>
//     )
//   }

// USE UUID
// const Transaction = () =>{
//     const data = [
//       // {title:"ค่ารักษาพยาบาล",amount:2000},
//       // {title:"ค่าน้ำมัน",amount:5000},
//       // {title:"ค่าเช่า",amount:8000},
//       // {title:"เงินเดือน",amount:9999},
//       // {title:"จ่ายประกัน",amount:1111},
//       // {title:"เดินทาง",amount:777}

//       // {title:20000,amount:"ค่ารักษาพยาบาล"},
//       // {title:"ค่าน้ำมัน"},
//       // { amount:8000},
//       // {title:"เงินเดือน",amount:9999},
//       // {title:"จ่ายประกัน",amount:1111},
//       // {title:"เดินทาง",amount:777}
//       {title:"ค่ารักษาพยาบาล",amount:2000},
//       {title:"ค่าน้ำมัน",amount:5000},
//       {title:"ค่าเช่า",amount:8000},
//       {title:"เงินเดือน",amount:9999},
//       {title:"จ่ายประกัน",amount:1111},
//       {title:"เดินทาง",amount:777}

//     ]
//     return (
//       <ul className="item-list">
//         {data.map((element)=>{
//           // return <Item {...element}  key={uuidv4()}/>
//           return <Item title={element.title} amount={element.amount}   key={uuidv4()}/>
  
//         })}
//       </ul>
//     )
//   }

const Transaction = (props)=>{
  const {items} = props
  return (
    <ul className="item-list">
        {items.map((element,index,arr)=>{
            return <Item {...element} numbercount={index} qty={arr.length} key={element.id} />
        })}
    </ul>
  );
}

export default Transaction;