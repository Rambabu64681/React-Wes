import { submitPayment } from '../api/paymentApi.js';

export const paymentService = {
  createTransferPayment: async (transferRequest) => {
    const payload = {
      senderId: transferRequest.senderId,
      receiverId: transferRequest.receiverId,
      amount: transferRequest.amount,
      currency: transferRequest.currency,
      paymentMethod: transferRequest.paymentMethod
    };

    return submitPayment(payload);
  }
};
