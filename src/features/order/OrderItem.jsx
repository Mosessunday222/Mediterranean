import { formatCurrency } from "../../utlis/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(isLoadingIngredients);

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        {/* <img src={imageUrl} alt={name} className="h-24" /> */}
      </div>
      <p className="">
        {isLoadingIngredients ? "loading....." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
