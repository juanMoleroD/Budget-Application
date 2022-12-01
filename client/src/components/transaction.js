import React from "react";

const Transaction = ({transaction}) => {


    
    return(
        <>
            <li>date: {transaction["date"]} - payee: {transaction["payee"]} - category: {transaction["category"]} - notes: 
            {transaction["notes"]} - money in: {transaction["moneyIn"]} - money out: {transaction["moneyOut"]}
            
            </li>
        </>
    );
}

export default Transaction;