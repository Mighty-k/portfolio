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
          style={{ backgroundColor: "#FDFAF6", color: "#2C2825" }}
          className="min-h-screen font-sans"
        >
          <CursorChaser />
          <Landing />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
