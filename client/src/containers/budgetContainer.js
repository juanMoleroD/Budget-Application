import React from "react";
import AddBudgetCategory from "../components/addBudgetCategory";
import BudgetList from "./budgetList";

const BudgetContainer = ({income, monthlyBudget, updateMonthlyBudget, addBudgetCategory}) => {

    let allocatedFunds = 0;
    monthlyBudget.forEach(category => allocatedFunds += parseInt(category["budgeted"]));

    return (
        <>
            <h1>I am the budget Container</h1>
            <h2>To Be budgeted: £{income - allocatedFunds} </h2>
            <BudgetList monthlyBudget={monthlyBudget} updateMonthlyBudget={updateMonthlyBudget}/> 
            <h3>Add Category</h3>
            <AddBudgetCategory addBudgetCategory={addBudgetCategory}/>
        </>
    )
}

export default BudgetContainer;