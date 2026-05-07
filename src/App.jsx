// App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CursorChaser from "./components/CursorChaser";
import Landing from "./pages/home";
import "./main.css";

// CursorChaser implemented in src/components/CursorChaser.jsx

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <div
          style={{ backgroundColor: "#fdf8f3", color: "#2d2d2d" }}
          className="min-h-screen text-charcoal font-sans"
        >
          <CursorChaser />
          <Landing />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
