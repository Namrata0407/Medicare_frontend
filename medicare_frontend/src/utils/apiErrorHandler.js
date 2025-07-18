import { toast } from '@chakra-ui/react';

export const handleApiError = (error, customMessage = null) => {
  let message = customMessage;

  if (!message) {
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const data = error.response.data;

      switch (status) {
        case 400:
          message = data?.message || 'Invalid request. Please check your input.';
          break;
        case 401:
          message = 'Authentication required. Please login again.';
          break;
        case 403:
          message = 'Access denied. You don\'t have permission for this action.';
          break;
        case 404:
          message = 'Resource not found.';
          break;
        case 422:
          message = data?.message || 'Validation error. Please check your input.';
          break;
        case 500:
          message = 'Server error. Please try again later.';
          break;
        default:
          message = data?.message || 'Something went wrong. Please try again.';
      }
    } else if (error.request) {
      // Network error
      message = 'Network error. Please check your internet connection.';
    } else {
      // Other errors
      message = error.message || 'An unexpected error occurred.';
    }
  }

  // Show toast notification
  toast({
    title: 'Error',
    description: message,
    status: 'error',
    duration: 5000,
    isClosable: true,
    position: 'top-right',
  });

  // Log error in development
  if (process.env.NODE_ENV === 'development') {
    console.error('API Error:', error);
  }

  return message;
};

export const handleApiSuccess = (message = 'Operation completed successfully') => {
  toast({
    title: 'Success',
    description: message,
    status: 'success',
    duration: 3000,
    isClosable: true,
    position: 'top-right',
  });
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}; 