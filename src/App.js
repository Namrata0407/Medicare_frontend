import './App.css';
import MainRoute from "./pages/MainRoutes";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <MainRoute />
    </ErrorBoundary>
  );
}

export default App;
