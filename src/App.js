import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Teste from "./pages";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
