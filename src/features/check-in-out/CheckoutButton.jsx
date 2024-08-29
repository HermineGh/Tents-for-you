/* eslint-disable react/prop-types */
import { useCheckout } from "./useCheckout";
import Button from "../../ui/Button";

function CheckoutButton({ bookingId }) {
  const { isLoading, checkout } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isLoading}
      style={{ textTransform: "uppercase", fontSize: "0.6rem" }}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
