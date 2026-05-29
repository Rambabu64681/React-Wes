const CustomerProfile = ({ customer }) => {
  return (
    <section className="card">
      <h3>{customer.fullName}</h3>
      <p><strong>Customer ID:</strong> {customer.customerId}</p>
      <p><strong>KYC Status:</strong> {customer.kycStatus}</p>
      <p><strong>Risk Rating:</strong> {customer.riskRating}</p>
      <p><strong>Country:</strong> {customer.country}</p>
    </section>
  );
};

export default CustomerProfile;
