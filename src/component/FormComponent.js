import { useState,useEffect } from 'react'
import '../stylesheet/FormComponent.css'
import { v4 as uuidv4 } from 'uuid'
const FormComponent = (props)=>{

    // console.log("Render Form Component");
    
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

   useEffect(()=>{
    const CheckData = title.trim().length>0 && amount !== 0
    console.log("Call")
    setFormValid(CheckData) 
    // if(CheckData){
    //     setFormValid(true) 
    // }
   },[title,amount])

    const inputTitle = (event)=>{
        setTitle(event.target.value)
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        // console.log(itemData)
        props.onAddItem(itemData) //ถูกส่งไป onAddItem
        setTitle('')
        setAmount(0)
    }
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent