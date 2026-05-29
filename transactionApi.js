const mockTransactions = [
  { id: 1, referenceNumber: 'WU-982341', senderName: 'John Miller', receiverName: 'Priya Rao', amount: 850, currency: 'USD', destinationCountry: 'India', status: 'Completed' },
  { id: 2, referenceNumber: 'WU-982342', senderName: 'Sara Johnson', receiverName: 'Ahmed Khan', amount: 1250, currency: 'USD', destinationCountry: 'UAE', status: 'Pending' },
  { id: 3, referenceNumber: 'WU-982343', senderName: 'David Lee', receiverName: 'Maria Gomez', amount: 430, currency: 'USD', destinationCountry: 'Mexico', status: 'Review' }
];

export const fetchTransactions = async () => {
  return Promise.resolve(mockTransactions);
};

export const fetchTransactionByReference = async (referenceNumber) => {
  return Promise.resolve(mockTransactions.find((txn) => txn.referenceNumber === referenceNumber));
};
