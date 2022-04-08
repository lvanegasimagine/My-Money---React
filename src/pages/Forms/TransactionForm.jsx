import { useState } from "react"

export default function TransactionForm(){
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log({
            name, 
            amount
        });
    }
    return (
        <>
            <h3>Add Transaction</h3>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="Transaction Name">
                    <span>Transaction name: </span>
                    <input type="text" required onChange={e => setName(e.target.value)} value={name}/>
                </label>
                <label htmlFor="Amount">
                    <span>Amount ($): </span>
                    <input type="number" required onChange={e => setAmount(e.target.value)} value={amount}/>
                </label>
                <button> Add Transaction </button>
            </form>
        </>
    )
}