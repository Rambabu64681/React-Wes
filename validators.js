export const isValidTransferAmount = (amount) => Number(amount) > 0 && Number(amount) <= 10000;

export const isValidReferenceNumber = (referenceNumber) => /^WU-[0-9]{6}$/.test(referenceNumber);
