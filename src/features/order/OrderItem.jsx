import { formatCurrency } from "../../utlis/helpers";

function OrderItem({ item }) {
  const { quantity, name, totalPrice, imageUrl } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        <img src={imageUrl} alt={name} className="h-24" />
      </div>
    </li>
  );
}

export default OrderItem;
