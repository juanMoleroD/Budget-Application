import React from "react";
import BudgetList from "./budgetList";

const BudgetContainer = ({income, monthlyBudget}) => {

    let allocatedFunds = 0;
    monthlyBudget.forEach(category => allocatedFunds += parseInt(category["budgeted"]));

    return (
        <>
            <h1>I am the budget Container</h1>
            <h2>To Be budgeted: £{income - allocatedFunds} </h2>
            <BudgetList monthlyBudget={monthlyBudget}/> 
        </>
    )
}

export default BudgetContainer;