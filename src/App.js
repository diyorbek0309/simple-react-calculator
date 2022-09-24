import { Routes, Route } from "react-router-dom";
import Calculator from "./Calculator";
import Login from "./Login";
import ErrorHandler from "./ErrorHandler";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorHandler />} />
      </Routes>
    </>
  );
}

export default App;

// Code splitting - lazy-loading
