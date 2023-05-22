import PropTypes from 'prop-types'
import  '../stylesheet/Item.css';
// const Item = () =>{
//     // const name = "พักโรงแรม"
//     const name = "เดินห้างซื้อของ"
//     const amount = 5000
//     return (
//         <li className='item'> {name} <span>- {amount}</span></li>
//     )
//   }
// const Item = (props) =>{
//     return(
//         <li> {props.title} <span>- {props.amount}</span></li>
//     )
// }

// const Item = (props) =>{
//     const {title,amount} = props
//     return(
//         <li> {title} <span>- {amount}</span></li>
//     )
// }

// const Item = ({title,amount}) =>{
//     // const {title,amount} = props
//     return(
//         <li> {title} <span>- {amount}</span></li>
//     )
// }

const Item = (props) =>{
        const {title,amount,numbercount,qty} = props
        const status = amount<0 ? "expense":"income"
        const symbol = amount<0 ? "-":"+"
        // const {title,amount,numbercount} = props
        return(
            <li className={status}>{qty-numbercount}:{title}<span>{symbol}{Math.abs(amount)}</span></li> // แบบจำนวนจากบนลงล่าง
            // <li>{numbercount+1}:{title} <span>- {amount}</span></li>
        )
    }

Item.propTypes = {
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired 
}

  export default Item;