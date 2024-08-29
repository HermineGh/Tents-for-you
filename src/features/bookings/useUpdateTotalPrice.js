import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useUpdateTotalPrice() {
  const queryClient = useQueryClient();

  const { mutate: calcTotalPrice } = useMutation({
    mutationFn: ({ bookingId, totalprice }) =>
      updateBooking(bookingId, {
        ...totalprice,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [{ active: true }] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { calcTotalPrice };
}
