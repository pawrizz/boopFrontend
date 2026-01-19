import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="app-root">
      <main className="app-content">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}
