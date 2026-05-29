import { useTransactions } from '../hooks/useTransactions.js';
import TransactionCard from '../components/TransactionCard/TransactionCard.jsx';

const Dashboard = () => {
  const { transactions, loading } = useTransactions();

  if (loading) return <p>Loading transaction summary...</p>;

  return (
    <section>
      <h2>Operations Dashboard</h2>
      <div className="summary-grid">
        <div className="metric-card">Total Transfers: {transactions.length}</div>
        <div className="metric-card">Pending Review: 2</div>
        <div className="metric-card">High Risk Alerts: 1</div>
      </div>
      <div className="grid">
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
