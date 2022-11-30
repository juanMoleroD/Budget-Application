import React, {useState} from 'react';
import './App.css';
import BudgetContainer from './containers/budgetContainer';
import TransactionContainer from './containers/transactionContainer';

function App() {

  const testTransaction = {
    "date": "2022-11-30",
    "payee": "Pamela",
    "category": "Groceries",
    "notes": "This is a transaction note",
    "moneyIn": 0,
    "moneyOut": 155.55 
}
  const [allTransactions, setAllTransactions] = useState([testTransaction, testTransaction]);

  const addTransaction = (transaction) => {
      const allTransactionsCopy = [...allTransactions, transaction];
      setAllTransactions(allTransactionsCopy);
  }

  return (
    <div className="App">
        <h1>Budget App</h1>
        <BudgetContainer />
        <h1>Transactions</h1>
        <TransactionContainer allTransactions={allTransactions} addTransaction={addTransaction}/> 
    </div>
  );
}

export default App;