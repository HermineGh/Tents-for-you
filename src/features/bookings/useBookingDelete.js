import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as delBookingApi } from "../../services/apiBookings";

export function useBookingDelete() {
  const queryClient = useQueryClient();
  const { isLoading: deleting, mutate: delBooking } = useMutation({
    mutationFn: delBookingApi,
    onSuccess: () => {
      toast.success("The booking deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleting, delBooking };
}
