import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { WishlistContextProvider } from "./context/WishlistContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import { GameFormProvider } from "./context/StoreContext";

import { Home } from "./Pages/Home";
import { Details } from "./Pages/Details";
import { Cart } from "./Pages/Cart";
import { Wishlist } from "./Pages/Wishlist";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <WishlistContextProvider>
          <AuthContextProvider>
            <ModalProvider>
              <GameFormProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </GameFormProvider>
            </ModalProvider>
          </AuthContextProvider>
        </WishlistContextProvider>
      </CartContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
