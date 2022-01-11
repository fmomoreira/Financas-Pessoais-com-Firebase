import React from 'react';
import styles from "./styles.css"

const CardFinance = (props) => {
  return (
    <div className="card-finance">
     <div className="row">
       <div className="col-1  status">
        <div className="point-status step-expense"></div>
       </div>
       <div className="col-9  expense">
         <span className="description-expense">{props.description}</span>
       </div>
       <div className="col-2  price-expense money-out">
         <span>{props.price}</span>
       </div>
     </div>
     </div>
  )
}


export default CardFinance