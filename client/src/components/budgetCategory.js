import React from "react";

const BudgetCategory = ({category, allocatedFunds, updateMonthlyBudget}) => {

    const updateBudgetedAmount = event => {
        event.preventDefault();
        updateMonthlyBudget(parseFloat(event.target.amount.value), category["name"])
    }

    return(
        <li>Name: {category["name"]} - Budgeted: £{category["budgeted"]} - Activity: £{category["activity"]} - 
        Avaliable: £{(parseFloat(category["budgeted"]) - parseFloat(category["activity"])).toFixed(2)} 
            <form onSubmit={updateBudgetedAmount}>
                <label>New Amount </label>
                <input name="amount" type="float"></input>
                <input type="submit" value="Update"/>
            </form>
        </li>
    )
}

export default BudgetCategory;