export const fetchCustomerById = async (customerId) => {
  return Promise.resolve({
    customerId,
    fullName: 'Sample Customer',
    kycStatus: 'Verified',
    riskRating: 'Low',
    country: 'United States'
  });
};
