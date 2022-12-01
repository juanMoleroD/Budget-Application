import React from "react";

const BudgetCategory = ({category, allocatedFunds}) => {

    return(
        <li>Name: {category["name"]} - Budgeted: £{category["budgeted"]} - Activity: £{category["activity"]} - 
        Avaliable: £{parseInt(category["budgeted"]) - parseInt(category["activity"])}</li>
    )
}

export default BudgetCategory;