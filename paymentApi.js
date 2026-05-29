export const submitPayment = async (payload) => {
  return Promise.resolve({
    paymentId: `PAY-${Date.now()}`,
    status: 'Submitted',
    ...payload
  });
};
