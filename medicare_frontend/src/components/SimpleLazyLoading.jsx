import React, { Suspense } from 'react';
import { EnhancedLoader } from './Loader/EnhancedLoader';

// Simple lazy loading for components that use default exports
export const createLazyComponent = (importFunc, fallbackMessage = "Loading...") => {
  const LazyComponent = React.lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={<EnhancedLoader message={fallbackMessage} />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Example usage (uncomment when ready to use):
/*
export const LazyHome = createLazyComponent(
  () => import('../pages/Home/Home'),
  "Loading Home..."
);

export const LazyProduct = createLazyComponent(
  () => import('../pages/Products/Product'),
  "Loading Products..."
);
*/ 