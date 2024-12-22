import { createContext } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  showCheckout: () => {},
  clearProgress: () => {},
});

export default UserProgressContext;
