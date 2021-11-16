export const getErrorTextByType = (type: string | undefined): string => {
  switch (type) {
    case 'auth/wrong-password':
      return 'Password is invalid';
    case 'auth/user-not-found':
      return 'User with this email was not found';
    case 'auth/email-already-exists':
      return 'User with this email already exists';
    case 'auth/internal-error':
      return 'Unknown server error';
    case 'auth/invalid-email':
      return 'Email is invalid. It must be a string email address.';
    case 'auth/invalid-password':
      return 'Password is invalid. It must be a string with at least six characters.';
    default:
      return 'Unknown error';
  }
};
