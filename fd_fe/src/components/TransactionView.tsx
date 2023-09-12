import React, {useEffect, useRef, useState} from 'react';
import { useLocation} from 'react-router-dom'
import "../styles.css"
function TransactionView() {
    type Transaction = {
        id: number;
        description: string;
        flagged: boolean;
        allowed: boolean;
        comments: string[];
        price: string;
    };

    const location= useLocation()
    const transaction : Transaction | undefined = location.state?.transaction;
    const [newTransaction, setNewTransaction] = useState<Transaction | {}>(transaction || {});
    const { id, description, flagged ,allowed , comments, price} = newTransaction as Transaction;
    const [comment, setComment] = useState('');
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.value = '';
        }
    }, [newTransaction]);
    const handleAddComment=()=>{
        console.log(comment,'comment')
            try {
                fetch(`transactions/${id}/comment`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({comment:comment})
                })
                    .then(response => response.json())
                    .then((data: Transaction) => setNewTransaction(data))
            } catch (err) {
                console.error('Error:', err);
            }
    }
    return (
        <>
            <div className="view-container">
                <h3 className="product-id">ID :{id}</h3>
                <span>{new Date().toLocaleString() + ''}</span>
                <p className="description"><b>Description</b>  {description}</p>
                <p className="price"> {price}</p>
                <span>{flagged? <em>flagged</em>:null}</span>
                <span>{allowed? <em>Allowed</em>:null}</span>
                <p><b>Comments:</b> {comments.map((comment,key)=>
                    <span key={key}><br/>{comment} <br/></span>
                )}</p>
                <div>
                    <input name='addComment' ref={ref} value={comment} placeholder='Add Comment' onChange={(e)=>setComment(e.target.value)}/>
                    <button className="button-comment" onClick={handleAddComment} > Add Comment </button>
                </div>
            </div>

        </>
    )

}

export default TransactionView;