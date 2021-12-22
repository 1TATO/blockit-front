import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Details } from "./Pages/Details";
import { Cart } from "./Pages/Cart";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
