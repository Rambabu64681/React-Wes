export const authService = {
  login: async (username, password) => Promise.resolve({ username, token: 'mock-jwt-token' }),
  logout: () => localStorage.removeItem('authToken'),
  hasRole: (role) => ['ADMIN', 'AGENT', 'COMPLIANCE_ANALYST'].includes(role)
};
