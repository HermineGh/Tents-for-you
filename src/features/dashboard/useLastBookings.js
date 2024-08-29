import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useLastBookings() {
  const [searchParams] = useSearchParams();

  const numbDays = searchParams.get("last")
    ? Number(searchParams.get("last"))
    : 7;
  const bookDate = subDays(new Date(), numbDays).toISOString();

  const { isLoading, data: bookingDate } = useQuery({
    queryKey: ["bookings", numbDays],
    queryFn: () => getBookingsAfterDate(bookDate),
  });
  return { isLoading, bookingDate };
}
