import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name}-logo`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{`$` + meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
