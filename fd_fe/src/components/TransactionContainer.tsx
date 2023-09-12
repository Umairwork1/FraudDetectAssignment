import React from 'react';
import '../styles.css'
import { useNavigate } from 'react-router-dom';

type Props = {
    transaction:Transaction,
    onFlagClick:(id: number) => void,
    onAllowClick:(id: number) => void,
}
type Transaction = {
    id:number,
    description:string,
    flagged:boolean,
    allowed:boolean,
    comments:string[],
    price:string,
}
function TransactionContainer({ transaction,onFlagClick,onAllowClick}: Props) {
    const { id, description, flagged ,allowed , comments, price} = transaction;
    const navigate = useNavigate();
    const handleViewTransaction = (Id: number) => {
        navigate(`/transaction`,{state:{transaction:transaction}});
    };
    return (
        <div className="list-container">
            <div className="card">
            <h3 className="product-id">ID :{id}</h3>
            <span>{new Date().toLocaleString() + ''}</span>
            <p className="description"><b>Description</b>  {description}</p>
            <p className="price"> {price}</p>
            <button className="button-flag" onClick={() => onFlagClick(id)}>
                {flagged? 'Flagged':'Add Flag'}
            </button>
            <button className="button-allow" onClick={() => onAllowClick(id)}>
                {allowed? 'Allowed':'Allow'}
            </button>
            <span>{comments.length} comments</span>
            <button className="button-view" onClick={() => handleViewTransaction(id)}>View</button>
            </div>
        </div>
    );
}

export default TransactionContainer;