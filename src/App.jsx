import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

import { Home } from "./Pages/Home";
import { Details } from "./Pages/Details";
import { Cart } from "./Pages/Cart";
import { Wishlist } from "./Pages/Wishlist";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </CartContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
