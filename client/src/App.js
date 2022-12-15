import React, {useEffect, useState} from 'react';
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

  const testIncome = {
      "date": "2022-11-01",
      "payee": "Pamela",
      "category": "Income",
      "notes": "",
      "moneyIn": 2000,
      "moneyOut": 0
  }

  const [income, setIncome] = useState(0);
  
  const [allTransactions, setAllTransactions] = useState([testIncome, testTransaction]);
  
  useEffect(() => {
      let totalIncome = 0;
      allTransactions.forEach(transaction => totalIncome += transaction.moneyIn);
      setIncome(totalIncome);
  }, [allTransactions]);

  const addTransaction = (transaction) => {
      const allTransactionsCopy = [...allTransactions, transaction];
      setAllTransactions(allTransactionsCopy);
  }

  const updateCategoryActivity = category => {
    let result = 0;
    allTransactions.forEach(transaction => {
      if (transaction.category === category) result += parseFloat(transaction.moneyOut);
    });
    return result;
  }

  const [monthlyBudget, setMonthlyBudget] = useState([]);

  useEffect(() => {
    const testBudgetCategory = {
      "name": "Groceries",
      "budgeted": 600,
      "activity": updateCategoryActivity("Groceries")
    }
    const budget = [testBudgetCategory];
    setMonthlyBudget(budget)
  }, []);

  const updateMonthlyBudget = (newAmount, categoryName) => {
    console.log(categoryName)
    const copyOfMonthlyBudget = [...monthlyBudget];
    copyOfMonthlyBudget.forEach(category => {
      if (category["name"] === categoryName) category.budgeted = newAmount;
    })
    setMonthlyBudget(copyOfMonthlyBudget);
  }

  const addBudgetCategory = newCategory => {
    newCategory["activity"] = updateCategoryActivity(newCategory["name"]);
    const copyOfMonthlyBudget = [...monthlyBudget, newCategory];
    setMonthlyBudget(copyOfMonthlyBudget);
  }

  return (
    <div className="App">
        <h1>Budget App</h1>
        <BudgetContainer 
            income={income} 
            monthlyBudget={monthlyBudget} 
            updateMonthlyBudget={updateMonthlyBudget}
            addBudgetCategory={addBudgetCategory} />
        <h1>Transactions</h1>
        <TransactionContainer allTransactions={allTransactions} addTransaction={addTransaction}/> 
    </div>
  );
}

export default App;