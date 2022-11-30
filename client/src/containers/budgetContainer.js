import React from "react";
import BudgetList from "./budgetList";

const BudgetContainer = () => {

    const testBudgetCategory = {
        "name": "Groceries",
        "budgeted": 600,
        "activity": 400
    }

    const monthlyBudget = [testBudgetCategory]

    return (
        <>
            <h1>I am the budget Container</h1>
            <BudgetList monthlyBudget={monthlyBudget}/> 
        </>
    )
}

export default BudgetContainer;