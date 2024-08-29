import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { isLoading, data: stays } = useQuery({
    queryKey: ["today-activity", "bookings"],
    queryFn: getStaysTodayActivity,
  });
  return { stays, isLoading };
}
