import { formatCurrency } from '../../utils/formatCurrency.js';

const TransactionCard = ({ transaction }) => {
  return (
    <article className="card">
      <div className="card-header">
        <h3>{transaction.referenceNumber}</h3>
        <span className={`status ${transaction.status.toLowerCase()}`}>{transaction.status}</span>
      </div>
      <p><strong>Sender:</strong> {transaction.senderName}</p>
      <p><strong>Receiver:</strong> {transaction.receiverName}</p>
      <p><strong>Amount:</strong> {formatCurrency(transaction.amount, transaction.currency)}</p>
      <p><strong>Destination:</strong> {transaction.destinationCountry}</p>
    </article>
  );
};

export default TransactionCard;
