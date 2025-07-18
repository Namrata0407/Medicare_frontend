import React from 'react';
import { Box, Spinner, Text, VStack, Progress } from '@chakra-ui/react';

export const EnhancedLoader = ({ 
  message = "Loading...", 
  size = "lg", 
  showProgress = false,
  progress = 0 
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="200px"
      w="100%"
    >
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size={size}
        />
        {showProgress && (
          <Box w="200px">
            <Progress 
              value={progress} 
              colorScheme="blue" 
              size="sm" 
              borderRadius="md"
            />
            <Text fontSize="sm" color="gray.600" mt={2} textAlign="center">
              {Math.round(progress)}%
            </Text>
          </Box>
        )}
        <Text color="gray.600" fontSize="md">
          {message}
        </Text>
      </VStack>
    </Box>
  );
};

export const SkeletonLoader = ({ count = 3, height = "60px" }) => {
  return (
    <VStack spacing={3} align="stretch">
      {Array.from({ length: count }).map((_, index) => (
        <Box
          key={index}
          height={height}
          bg="gray.200"
          borderRadius="md"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition="opacity 1.5s ease-in-out infinite"
        />
      ))}
    </VStack>
  );
}; 