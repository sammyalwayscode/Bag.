import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
// import EmptyCart from "./Components/Cart/EmptyCart";
import Catalogue from "./Components/Catalogue/Catalogue";
import DetailPage from "./Components/Catalogue/DetailPage";
import CheckOut from "./Components/CheckOut&Paynment/CheckOut";
import Paynment from "./Components/CheckOut&Paynment/Paynment";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/payment" element={<Paynment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
