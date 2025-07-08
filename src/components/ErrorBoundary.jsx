import React from 'react';
import { Box, Text, Button, VStack, Heading } from '@chakra-ui/react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box 
          minH="100vh" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          bg="gray.50"
        >
          <VStack spacing={6} textAlign="center" p={8}>
            <Heading color="red.500" size="lg">
              Oops! Something went wrong
            </Heading>
            <Text color="gray.600" maxW="md">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </Text>
            <Button 
              colorScheme="blue" 
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </Button>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 