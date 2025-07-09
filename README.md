# 💊 Medicare - Online Healthcare & Medicine Platform

Medicare is a comprehensive online healthcare platform that provides easy access to medicines, health products, and healthcare services. Built with modern web technologies, it offers a seamless experience for users to order medicines, browse health products, and manage their healthcare needs online.

## 🌟 Overview

Medicare is India's leading online pharmacy platform, similar to popular services like 1mg and PharmEasy. The platform enables users to:

- **Order Medicines Online**: Browse and purchase prescription and over-the-counter medicines
- **Browse Health Products**: Explore vitamins, supplements, health devices, and wellness products
- **Ayurveda Section**: Access traditional Ayurvedic medicines and health products
- **User Management**: Secure user registration, login, and profile management
- **Shopping Cart**: Add products to cart and complete secure checkout
- **Admin Panel**: Comprehensive admin dashboard for product and user management

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **Chakra UI** - Modular and accessible component library
- **Redux & Redux Thunk** - State management for complex application state
- **React Router DOM** - Client-side routing for single-page application
- **Axios** - HTTP client for API communication
- **Framer Motion** - Animation library for smooth user interactions
- **React Slick** - Carousel and slider components
- **Bootstrap** - CSS framework for responsive design
- **React Icons** - Popular icon library

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Web application framework for Node.js
- **MongoDB & Mongoose** - NoSQL database and object modeling
- **JWT (JSON Web Tokens)** - Secure user authentication
- **bcrypt** - Password hashing for security
- **CORS** - Cross-origin resource sharing middleware
- **Nodemon** - Development tool for auto-restarting server

## 🚀 Key Features

### 🏠 Home Page
- Interactive product carousels with auto-sliding functionality
- Featured health product sections (BP Monitors, Popular Combos)
- Ayurveda brands showcase
- Disease-wise product categories
- Responsive design for all device types

### 👤 User Authentication
- Secure user registration and login system
- JWT-based authentication with token storage
- Protected routes for authenticated users
- User profile management
- Password encryption using bcrypt

### 🛒 Product Management
- Comprehensive product catalog with categories
- Advanced filtering (by age group, category, price range)
- Product search functionality with semantic search
- Detailed product pages with specifications
- Product rating and review system
- Discount and pricing information

### 🛍️ Shopping Experience
- Add to cart functionality with quantity management
- Real-time cart updates and price calculations
- Secure checkout process with address management
- Payment gateway integration
- Order tracking and management

### 👩‍💼 Admin Dashboard
- Complete admin panel for product management
- User management and monitoring
- Order management and tracking
- Product CRUD operations (Create, Read, Update, Delete)
- Sales analytics and reporting
- Dashboard with key metrics

### 🔧 Advanced Features
- Error boundaries for graceful error handling
- Lazy loading for improved performance
- Toast notifications for user feedback
- Custom hooks for reusable logic
- API error handling utilities
- Loading states and skeleton screens

## 📁 Project Structure

```
medicare/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CardComponents/  # Product card components
│   │   ├── Carousels/      # Slider and carousel components
│   │   ├── CheckoutComponents/ # Checkout process components
│   │   ├── Footer/         # Footer components
│   │   ├── Loader/         # Loading components
│   │   ├── Login/          # Authentication components
│   │   └── Navbar/         # Navigation components
│   ├── Context/            # React Context for state management
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Main page components
│   │   ├── Admin/          # Admin dashboard pages
│   │   ├── Cart/           # Shopping cart page
│   │   ├── Checkout/       # Checkout process pages
│   │   ├── Home/           # Home page
│   │   ├── Login/          # Login page
│   │   ├── Products/       # Product listing pages
│   │   └── SingleProduct/  # Individual product pages
│   ├── redux/              # Redux store and reducers
│   ├── utils/              # Utility functions and data
│   └── Styles/             # CSS modules and styles

backend/
├── models/                 # MongoDB schemas
├── routes/                 # API route handlers
├── middlewares/            # Authentication and validation
└── db.js                   # Database connection
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Frontend Setup
```bash
# Navigate to frontend directory
cd medicare

# Install dependencies
npm install

# Create environment file
echo "REACT_APP_BASEURL=http://localhost:8080" > .env

# Start development server
npm start
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
echo "port=8080" > .env
echo "mongoURL=your_mongodb_connection_string" >> .env

# Start backend server
npm run server
```

## 🌐 API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/:id` - Get user by ID
- `GET /auth/` - Get all users

### Products
- `GET /productPage` - Get all products
- `GET /productPage/:id` - Get product by ID
- `POST /productPage/addone` - Add new product (Admin)
- `PATCH /productPage/update/:id` - Update product (Admin)
- `DELETE /productPage/delete/:id` - Delete product (Admin)

### Cart Management
- `POST /cart/addone` - Add item to cart
- `GET /cart/` - Get user's cart items
- `PATCH /cart/update/:id` - Update cart item
- `DELETE /cart/delete/:id` - Remove from cart

### Orders
- `POST /orders/addone` - Create new order
- `GET /orders/` - Get all orders
- `PATCH /orders/update/:id` - Update order status

## 👥 User Roles

### Customer
- Browse and search products
- Add items to cart and checkout
- View order history
- Manage profile and addresses

### Admin
- **Login Credentials**: 
  - Email: `admin@medicare.com`
  - Password: `admin`
- Full product management (CRUD operations)
- User management and monitoring
- Order management and tracking
- Access to analytics dashboard

## 🧪 Testing

The project includes comprehensive testing guidelines. See `TESTING_GUIDE.md` for detailed testing procedures covering:
- Core functionality testing
- Authentication flow testing
- Product management testing
- Cart and checkout testing
- Admin panel testing
- Responsive design testing

## 🚀 Deployment

### Frontend Deployment
```bash
# Build for production
npm run build

# Deploy to hosting service (Netlify, Vercel, etc.)
```

### Backend Deployment
```bash
# Ensure environment variables are set
# Deploy to cloud service (Heroku, AWS, etc.)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers (1024px and above)
- Tablets (768px - 1023px)
- Mobile devices (320px - 767px)

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation and sanitization
- CORS configuration for secure cross-origin requests

## 📊 Performance Optimizations

- Lazy loading of components
- Image optimization
- Code splitting
- Efficient state management with Redux
- Memoization of expensive operations
- Optimized bundle size

## 📞 Support

For technical support or questions:
- Check the console for detailed error messages
- Review the `TESTING_GUIDE.md` for troubleshooting
- Ensure all environment variables are properly configured

## 📄 License

This project is developed for educational and portfolio purposes.

---

**Medicare** - Making Healthcare Accessible & Affordable 💊🏥
