import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useLastStays() {
  const [searchParams] = useSearchParams();

  const numbDays = searchParams.get("last")
    ? Number(searchParams.get("last"))
    : 7;
  const bookDate = subDays(new Date(), numbDays).toISOString();

  const { isLoading: staysLoading, data } = useQuery({
    queryKey: ["stays", "bookings", numbDays],
    queryFn: () => getStaysAfterDate(bookDate),
  });

  //the bookings  with "check-in" or "check-out" status
  const staysDate = data?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { staysLoading, staysDate, numbDays };
}
