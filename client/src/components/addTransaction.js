import React from "react";

const AddTransaction = ({addTransaction}) => {


    const handleSubmit = event => {
        event.preventDefault();
        const newTransaction = {
            "date": event.target.date.value,
            "payee": event.target.payee.value,
            "category": event.target.category.value,
            "notes": event.target.category.value,
            "moneyIn": event.target.moneyIn.value,
            "moneyOut": event.target.moneyOut.value
        }

        addTransaction(newTransaction);
    
        console.log(newTransaction);
    } 

    return (
        <>
            <h3>Add Transaction form</h3>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input name="date" type="date"/>
                <label>Payee</label>
                <input name="payee" type="text"/>
                <label>Category</label>
                <input name="category" type="text"/>
                <label>Notes</label>
                <input name="notes" type="text"/>
                <label>Money In</label>
                <input name="moneyIn" type="float"/>
                <label>Money Out</label>
                <input name="moneyOut" type="float"/>
                <input type="submit" value="Add Transaction"/>
            </form>
        </>
    );
}

export default AddTransaction;