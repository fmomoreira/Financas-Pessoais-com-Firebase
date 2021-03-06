import React from 'react';
import styles from "./styles.css"

const CardFinance = (props) => {
  return (
    <div className="card-finance">
     <div className="row">
       <div className="col-1  status">
        <div className={`point-status ${props.status}`}></div>
       </div>
       <div className="col-9  expense">
         <span className="description-expense">{props.description}</span>
         <span className="date-expense">{props.date}</span>
       </div>
       <div className={`col-2  price-expense ${props.typeExpense}`}>
         <span>{props.price}</span>
       </div>
     </div>
     </div>
  )
}


export default CardFinance