import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Details } from "./Pages/Details";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
