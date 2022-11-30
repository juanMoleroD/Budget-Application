import React from "react";

const BudgetCategory = ({category}) => {

    return(
        <li>Name: {category["name"]} - Budgeted: £{category["budgeted"]} - Activity: £{category["activity"]} - 
        Avaliable: £{category["budgeted"] - category["activity"]}</li>
    )
}

export default BudgetCategory;