import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, handleSort, handleDeletion}){

    return(
        <table className="ui celled striped padded table">
        <tbody>
        <tr>
            <th>
                <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
                <h3 className="ui center aligned header"> Description </h3>
            </th>
            <th>
                <h3 className="ui center aligned header"> Category </h3>
            </th>
            <th>
                <h3 className="ui center aligned header"> Amount </h3>
            </th>
        </tr>

        {transactions.map(transactionObj =>
          <Transaction
            key={transactionObj.id}
            transactionObj={transactionObj}
            handleSort={handleSort}
            handleDeletion={handleDeletion} />)}

     </tbody>
    </table>

    )
   
}

export default TransactionsList;