import React from 'react';
import AddTransaction from '../components/addTransaction';
import TransactionList from './transactionList';

const TransactionContainer = ({allTransactions, addTransaction}) => {
    
    return(
        <>
            <h2>I am the transaction container</h2>
            <TransactionList allTransactions={allTransactions}/> 
            <h2>Add Transactions</h2> 
            <AddTransaction addTransaction={addTransaction}/> 
        </>
    );
}

export default TransactionContainer;
