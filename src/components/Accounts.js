import React from "react";
import Search from "./Search";
import TransactionsForm from "./TransactionsForm";
import TransactionsList from "./TransactionsList";

function Accounts(){
    const [transactions, setTransactions] = React.useState([]);
    const [copyTransactions,setCopyTransactions] = React.useState([]);

    function dataFetch(){
        fetch("http://localhost:8001/transactions")
        .then(res => res.json())
        .then(result => {
            setCopyTransactions(result)
            setTransactions(result)
        })
    }
     React.useEffect(() => {
        dataFetch()
     }, [])

function onSubmit(object){
    console.log(object)

    fetch("http://localhost:8001/transactions",{
        method: "POST",
        headers: {"content-type" : "application/json"},
        body:JSON.stringify({...object, "amount":parseInt(object.amount)})
    }).then(()=>dataFetch())
}

    
function handleSearch(event){
    let searching = event.target.value.toLowerCase();
    setTransactions(copyTransactions.filter(val => 
        val.description.toLowerCase().includes(searching)));
}

function handleSort(e){
    let criteria = e.target.textContent.toLowerCase();
    function compare(a,b){
        if(a[criteria].toLowerCase()< b[criteria].toLowerCase()){
            return -1;
        }if(a[criteria].toLowerCase()> b[criteria].toLowerCase()){
            return 1;
        }
    return 0;
    }
    console.log("Welcome")
    setTransactions([...transactions.sort(compare)])
}
function handleDeletion(id){
    fetch(`http://localhost:8001/transactions/${id}`,{
        method: "DELETE"
    }).then(() => dataFetch())
}
return(
    <div>
        <Search handleSearch={handleSearch} />
        <TransactionsForm submit={onSubmit}/>
        <TransactionsList 
        transactions={transactions}
        handleSort={handleSort}
        handleDeletion={handleDeletion}
        />
    </div>
)

}


export default Accounts;