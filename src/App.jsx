// Component Imports:
import Navbar from "./components/layout/Navbar";
import AppRouter from "./routes/AppRouter";
import Footer from "./components/layout/Footer";

// Hook Imports:
import useScrollToTop from "./hooks/useScrollToTop";

export default function App() {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}
