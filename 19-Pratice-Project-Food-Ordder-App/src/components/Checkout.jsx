import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UserProgressContext from "../context/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import { useActionState } from "react";

const requestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, error, sendRequest, clearData } = useHttp("http://localhost:3000/orders", requestConfig, []);

  async function checkoutAction(prevState, formData) {
    const userData = Object.fromEntries(formData.entries());
    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: userData,
        },
      })
    );
  }

  const [formState, formAction, pending] = useActionState(checkoutAction, null);

  let actions = (
    <>
      <Button type="button" textOnly onClick={userProgressCtx.clearProgress}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (pending) {
    actions = <span>Loading...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={() => {
          userProgressCtx.clearProgress();
          cartCtx.clearCart();
          clearData();
        }}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully!</p>
        <p>We will get back to your with more details via email in the next few minutes</p>
        <p className="modal-actions">
          <Button
            onClick={() => {
              userProgressCtx.clearProgress();
              cartCtx.clearCart();
              clearData();
            }}
          >
            Close
          </Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={userProgressCtx.clearProgress}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: ${totalAmount}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error != null && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
