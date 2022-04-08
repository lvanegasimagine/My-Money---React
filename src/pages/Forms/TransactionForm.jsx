import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, name, amount });

    setName('');
    setAmount('');
  };

//   console.log(response.sucess);
//   useEffect(() => {
//     if (response.sucess) {
//       setName("");
//       setAmount("");
//       console.log(response.success);
//     }
//   }, [response.success]);

  return (
    <>
      <h3>Add Transaction</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="Transaction Name">
          <span>Transaction name: </span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label htmlFor="Amount">
          <span>Amount ($): </span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button> Add Transaction </button>
      </form>
    </>
  );
}