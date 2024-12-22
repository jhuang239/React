import headerImg from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";
import { useContext } from "react";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.reduce((acc, item) => acc + item.quantity, 0);
  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgress.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={headerImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={userProgressCtx.showCart}>
          Cart {`(${totalItems})`}
        </Button>
      </nav>
    </header>
  );
}
