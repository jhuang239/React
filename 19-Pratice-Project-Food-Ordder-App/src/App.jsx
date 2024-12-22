import Header from "./components/Header";
import { useState, useEffect } from "react";
import Meals from "./components/Meals";
import CartContextProvider from "./context/CartContextProvider";
import UserProgressContextProvider from "./context/UserProgressContextProvider";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header numberOfItems={0} />
        <Meals />
        <Cart />
        <Checkout />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
