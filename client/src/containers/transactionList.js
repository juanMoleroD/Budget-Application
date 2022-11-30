import React from "react";
import Transaction from "../components/transaction";

const TransactionList = ({allTransactions}) => {

    const transactionNodes = allTransactions.map((transaction, index) => {
        return <Transaction transaction={transaction} key={index}/> 
    });

    return (
        <>
            <h3>Transaction List</h3>
            <ul>
                {allTransactions ? transactionNodes : null}
            </ul>
        </>
    )
}

export default TransactionList;