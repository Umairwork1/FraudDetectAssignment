import React, {useEffect, useState} from 'react';
import TransactionContainer from "./TransactionContainer";

type Transaction = {
    id: number;
    description: string;
    flagged: boolean;
    allowed: boolean;
    comments: string[];
    price: string;
};

function TransactionList() {



    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        try {
            fetch('transactions/', )
                .then(response => response.json())
                .then((data: Transaction[]) => setTransactions(data)
                )
        } catch (err) {
            console.error('Error:', err);
        }
    }, []);

    const handleFlagClick = (id : number) => {
        try {
            fetch(`transactions/${id}/flag`, {method: "post",})
                .then(response => response.json())
                .then(data => setTransactions(data)
                )
        } catch (err) {
            console.error('Error:', err);
        }
    };
    const handleAllowClick =(id :number)=>{
        try {
            fetch(`transactions/${id}/allow`, { method: "post", })
                .then(response => response.json())
                .then(data => setTransactions(data)
                )
        } catch (err) {
            console.error('Error:', err);
        }
    }
    return (
        <div >
            <h1>Fraudulent Transactions</h1>

            {transactions?.map((transaction) => (
                <TransactionContainer
                    key={transaction.id}
                    transaction={transaction}
                    onFlagClick={handleFlagClick}
                    onAllowClick={handleAllowClick}
                />
            ))}
        </div>
    );
}

export default TransactionList;