export {}
const fs = require('fs');

type Transaction = {
    id: number;
    description: string;
    flagged: boolean;
    allowed: boolean;
    comments: string[];
    price: string;
};
let transactions: Transaction[] = [];

const loadTransactions=()=> {
    try {
        const data = fs.readFileSync('transactions.json', 'utf8');
        transactions = JSON.parse(data);
        return transactions;
       // console.log(data)

    } catch (err) {
        transactions = [];
    }
}

const saveTransactions=()=> {
    fs.writeFileSync('transactions.json', JSON.stringify(transactions, null, 2), 'utf8');
}

module.exports = {
    loadTransactions,
    saveTransactions,
};