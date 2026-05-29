import { useEffect, useState } from 'react';
import { fetchCustomerById } from '../api/customerApi.js';

export const useCustomerData = (customerId) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (!customerId) return;
    fetchCustomerById(customerId).then(setCustomer);
  }, [customerId]);

  return customer;
};
