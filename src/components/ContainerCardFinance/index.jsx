import React from 'react'
import CardFinance from '../CardFinance'
import styles from "./styles.css"

const ContainerCardsFinance = () => {
  return (
  <>
    <div className="list-cards-finance">
      <CardFinance
        price="-R$ 20.00"
        description="Abstecimento"
      />
      </div>
  </>
  )
}

export  default ContainerCardsFinance