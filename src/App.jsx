import Navbar from "./components/layout/Navbar";
import AppRouter from "./routes/AppRouter";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}
