import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard.jsx';
import Transactions from '../pages/Transactions.jsx';
import Customers from '../pages/Customers.jsx';
import Reports from '../pages/Reports.jsx';
import Compliance from '../pages/Compliance.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/compliance" element={<Compliance />} />
  </Routes>
);

export default AppRoutes;
