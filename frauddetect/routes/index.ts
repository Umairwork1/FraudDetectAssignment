import express, { Request, Response } from 'express';
const router = express.Router();
const { saveTransactions, loadTransactions, } = require('../data');

type Transaction = {
    id: number;
    description: string;
    flagged: boolean;
    allowed: boolean;
    comments: string[];
    price: string;
};
const data =loadTransactions().slice().reverse()
// endpoints
router.get('/', (req: Request, res: Response) => {
    res.json(data);
});

router.post('/:id/flag', (req: Request, res: Response)  => {
    const id = parseInt(req.params.id, 10);
    const transaction = data.find((t:Transaction) => t.id === id);

    if (!transaction) {
        res.status(404).json({ error: 'Transaction not found' });
    } else {
        // Flag a transaction as suspicious.
        transaction.flagged = !transaction.flagged
        saveTransactions();
        res.json(data);
        // storing flagged transactions
    }
});

router.post('/:id/allow', (req: Request, res: Response)  => {
    const id = parseInt(req.params.id, 10);
    const transaction = data.find((t:Transaction) => t.id === id);

    if (!transaction) {
        res.status(404).json({ error: 'Transaction not found' });
    } else {
        // Allow a transaction.
        transaction.allowed = !transaction.allowed;
        saveTransactions();
        res.json(data);
    }
});

router.post('/:id/comment', (req: Request, res: Response)  => {
    const id = parseInt(req.params.id, 10);
    const comment = req.body.comment;
    const transaction = data.find((t:Transaction) => t.id === id);

    if (!transaction) {
        res.status(404).json({ error: 'Transaction not found' });
    } else {
        // Comment on a transaction.
        transaction.comments.push(comment);
        res.json(transaction);
        saveTransactions();
    }
});

module.exports = router;
