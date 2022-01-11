import React from 'react';
import styles from "./styles.css"
import ModalNewDespesa from "../ModalNewDespesa"
const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-10 resume-price">
          <div className="text-header">
            <span>Total Balance</span>
          </div>
          <div className="price-total-header">
          <h1>$3,234.00</h1>
          </div>
       </div>
      <div>
        <div className="col-2 add-finance">
          <div className="button-pluss-finance">
            <span className="plus-finance" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"
             
            >+</span>
            <ModalNewDespesa/>
          </div>
        </div>
      </div>
      </div>
     </div>
  )
}


export default Header