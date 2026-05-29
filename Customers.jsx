import CustomerProfile from '../components/CustomerProfile/CustomerProfile.jsx';

const customers = [
  { customerId: 'CUST-1001', fullName: 'Michael Carter', kycStatus: 'Verified', riskRating: 'Low', country: 'United States' },
  { customerId: 'CUST-1002', fullName: 'Anita Sharma', kycStatus: 'Pending Review', riskRating: 'Medium', country: 'India' }
];

const Customers = () => {
  return (
    <section>
      <h2>Customer KYC Profiles</h2>
      <div className="grid">
        {customers.map((customer) => (
          <CustomerProfile key={customer.customerId} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Customers;
