import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "./hooks/useTheme";

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-porcelain text-ink transition-colors duration-300 dark:bg-midnight dark:text-porcelain">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

