export default function CartItem({ item, onAdd, onRemove }) {
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x {item.price}
      </p>
      <p className="cart-item-actions">
        <button onClick={onRemove}>-</button>
        <span>QTY</span>
        <button onClick={onAdd}>+</button>
      </p>
    </li>
  );
}
