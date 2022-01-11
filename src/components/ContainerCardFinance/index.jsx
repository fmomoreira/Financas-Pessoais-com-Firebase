import React from 'react'
import CardFinance from '../CardFinance'
import styles from "./styles.css"

const ContainerCardsFinance = () => {
  return (
  <>
    <div className="list-cards-finance">
      <CardFinance
        status="moneyOut"
        price="-R$ 20.00"
        description="Abstecimento"
        date="Quarta as 21:49 PM"
        typeExpense="money-out"
      />
      <CardFinance
        status="moneyIn"
        price="+R$ 3235.90"
        description="Freelancer"
        date="Sexta as 8:15 AM"
        typeExpense="money-deposit"
      />
        <CardFinance
        status="moneyOut"
        price="-R$ 85.00"
        description="Contrução"
        date="Terça as 09:49 PM"
        typeExpense="money-out"
      />
        <CardFinance
        status="moneyOut"
        price="-R$ 569.00"
        description="Car repare"
        date="Sabado as 10:45 AM"
        typeExpense="money-out"
      />

        <CardFinance
        status="moneyIn"
        price="+R$ 8490"
        description="Freelancer"
        date="Segunda as 12:00 AM"
        typeExpense="money-deposit"
      />
        <CardFinance
        status="moneyOut"
        price="-R$ 20.00"
        description="Abstecimento"
        date="Quarta as 21:49 PM"
        typeExpense="money-out"
      />
      <CardFinance
        status="moneyIn"
        price="+R$ 3235.90"
        description="Freelancer"
        date="Sexta as 8:15 AM"
        typeExpense="money-deposit"
      />
        <CardFinance
        status="moneyOut"
        price="-R$ 85.00"
        description="Contrução"
        date="Terça as 09:49 PM"
        typeExpense="money-out"
      />
        <CardFinance
        status="moneyOut"
        price="-R$ 569.00"
        description="Car repare"
        date="Sabado as 10:45 AM"
        typeExpense="money-out"
      />

        <CardFinance
        status="moneyIn"
        price="+R$ 8490"
        description="Freelancer"
        date="Segunda as 12:00 AM"
        typeExpense="money-deposit"
      />
      </div>
  </>
  )
}

export  default ContainerCardsFinance