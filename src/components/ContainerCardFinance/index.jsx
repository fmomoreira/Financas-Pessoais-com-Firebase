import React, {useState, useEffect} from 'react'
import CardFinance from '../CardFinance'
import styles from "./styles.css"
import firebase from "../../firebase/firebaseconfig"



const ContainerCardsFinance = () => {
const [finances, setFinances] = useState([])

const database = firebase.firestore()

  useEffect(() => {
    database.collection("finances").onSnapshot((query)=>{
      const listFinances = [] 
      query.forEach((doc) => {
        listFinances.push({...doc.data(), id: doc.id})
      })
      setFinances(listFinances)
    })
  }, [])


  return (
  <>
    <div className="list-cards-finance">

    {finances.map((finance)=>{
      return(
      <CardFinance
        price={`R$ ${finance.price}`}//finance.price
        description={finance.description}//finance.description
        date={finances.date}//finances.date
        typeExpense={finance.typeExpense}//finance.typeExpense
      />
      )
      })}
      </div>
  </>
  )
}

export  default ContainerCardsFinance