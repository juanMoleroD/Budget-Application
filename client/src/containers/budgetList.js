import React from "react";
import BudgetCategory from "../components/budgetCategory";

const BudgetList = ({monthlyBudget}) => {

    const categoryNodes = monthlyBudget.map((category, index) => { 
        return <BudgetCategory category={category} key={index} />
    });

    console.log(categoryNodes)

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