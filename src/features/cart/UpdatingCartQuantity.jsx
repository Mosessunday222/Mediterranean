import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";

function UpdatingCartQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseCartQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseCartQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleIncreaseCartQuantity}>
        +
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={handleDecreaseCartQuantity}>
        -
      </Button>
    </div>
  );
}

export default UpdatingCartQuantity;
