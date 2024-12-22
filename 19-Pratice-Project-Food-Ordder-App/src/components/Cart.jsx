import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";
import Button from "../UI/Button";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? userProgressCtx.clearProgress : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
              onAdd={() => cartCtx.addItem(item)}
              onRemove={() => cartCtx.removeItem(item.id)}
            />
          );
        })}
      </ul>
      <p className="cart-total">Total: {`$${cartTotal}`}</p>
      <p className="modal-actions">
        <Button textOnly onClick={userProgressCtx.clearProgress}>
          Close
        </Button>
        {cartCtx.items.length > 0 && <Button onClick={userProgressCtx.showCheckout}>Go to checkout</Button>}
      </p>
    </Modal>
  );
}
