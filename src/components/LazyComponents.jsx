import React, { Suspense } from 'react';
import { EnhancedLoader } from './Loader/EnhancedLoader';

// Simple lazy loading wrapper
const createLazyComponent = (importFunc, fallbackMessage = "Loading...") => {
  const LazyComponent = React.lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={<EnhancedLoader message={fallbackMessage} />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy components
export const LazyHome = createLazyComponent(
  () => import('../pages/Home/Home'),
  "Loading Home..."
);

export const LazyProduct = createLazyComponent(
  () => import('../pages/Products/Product'),
  "Loading Products..."
);

export const LazySingleProduct = createLazyComponent(
  () => import('../pages/SingleProduct/SingleProduct'),
  "Loading Product Details..."
);

export const LazyCheckout = createLazyComponent(
  () => import('../pages/Checkout/Checkout'),
  "Loading Checkout..."
);

export const LazyLogin = createLazyComponent(
  () => import('../pages/Login/Login'),
  "Loading Login..."
);

export const LazySignup = createLazyComponent(
  () => import('../pages/Signup/Signup'),
  "Loading Signup..."
);

export const LazyDashboardMain = createLazyComponent(
  () => import('../pages/Admin/DashboardMain'),
  "Loading Dashboard..."
);

export const LazyProductList = createLazyComponent(
  () => import('../pages/Admin/ProductList'),
  "Loading Product List..."
);

export const LazyAdminAddProduct = createLazyComponent(
  () => import('../pages/Admin/AdminAddProduct'),
  "Loading Add Product..."
);

export const LazyUserList = createLazyComponent(
  () => import('../pages/Admin/UserList'),
  "Loading User List..."
);

export const LazyAdminEditProduct = createLazyComponent(
  () => import('../pages/Admin/AdminEditProduct'),
  "Loading Edit Product..."
);

export const LazyOrderList = createLazyComponent(
  () => import('../pages/Admin/OrderList'),
  "Loading Order List..."
);

// Special handling for Cart component (named export)
const CartLazy = React.lazy(() => import('../pages/Cart/Cart'));
export const LazyCart = (props) => (
  <Suspense fallback={<EnhancedLoader message="Loading Cart..." />}>
    <CartLazy.Cart {...props} />
  </Suspense>
); 