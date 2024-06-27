import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Teste from "./pages";
import SignUp from "./pages/signup";
import { AuthContextProvider } from "./context/auth";




function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
