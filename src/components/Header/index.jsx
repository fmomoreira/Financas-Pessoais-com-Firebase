import React, {useState, useEffect} from "react";
import styles from "./styles.css";
import ModalNewDespesa from "../ModalNewDespesa";
import firebase from "../../firebase/firebaseconfig"


const Header = () => {

const [price, setPrice] = useState(0)

const database = firebase.firestore()



const getSumPrices = database.collection('finances')
  .onSnapshot(querySnapshot => {
  const data  = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  }) 
  const prices = data.map((item)=>{
    return (
      item.price
    )
  })
  
  let total = prices.reduce((total, prices) => total + prices, 0);
  setPrice(total)
  return () => getSumPrices();
  })
  



  return (
    <div className="header">
      <div className="row">
        <div className="col-10 resume-price">
          <div className="text-header">
            <span>Total Balance</span>
          </div>
          <div className="price-total-header">
            <h1>${price.toFixed(2)}</h1>
          </div>
        </div>
        <div>
          <div className="col-2 add-finance">
            <div className="button-pluss-finance">
              <span
                className="plus-finance"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo"
              >
                +
              </span>
              <ModalNewDespesa />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
