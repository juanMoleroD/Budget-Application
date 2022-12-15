import React from "react";
import BudgetCategory from "../components/budgetCategory";

const BudgetList = ({monthlyBudget, updateMonthlyBudget}) => {

    let allocatedFunds = 0;
    monthlyBudget.forEach(category => allocatedFunds += parseInt(category["budgeted"]));

    const categoryNodes = monthlyBudget.map((category, index) => { 
        return <BudgetCategory category={category} key={index} allocatedFunds={allocatedFunds} updateMonthlyBudget={updateMonthlyBudget}/>
    });



    return(
        <>
            <h3>Budget List</h3>
            <ol>
                {categoryNodes.lenght < 1 ? null : categoryNodes}
            </ol>
        </>
    );
}

export default BudgetList;