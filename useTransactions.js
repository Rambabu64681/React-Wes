import { useEffect, useState } from 'react';
import { fetchTransactions } from '../api/transactionApi.js';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions()
      .then(setTransactions)
      .finally(() => setLoading(false));
  }, []);

  return { transactions, loading };
};
