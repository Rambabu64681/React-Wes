import { useTransactions } from '../hooks/useTransactions.js';
import { formatCurrency } from '../utils/formatCurrency.js';

const Transactions = () => {
  const { transactions } = useTransactions();

  return (
    <section>
      <h2>Transaction Management</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Reference</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.referenceNumber}</td>
              <td>{txn.senderName}</td>
              <td>{txn.receiverName}</td>
              <td>{formatCurrency(txn.amount, txn.currency)}</td>
              <td>{txn.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Transactions;
