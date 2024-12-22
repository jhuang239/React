import { useContext, useState } from "react";
import UserProgressContext from "./UserProgressContext";

export default function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function clearProgress() {
    setUserProgress("");
  }

  const userProgressContext = {
    progress: userProgress,
    showCart,
    showCheckout,
    clearProgress,
  };

  return <UserProgressContext value={userProgressContext}>{children}</UserProgressContext>;
}
