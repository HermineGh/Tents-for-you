/* eslint-disable react/prop-types */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { pageSteps } from "../../ui/Pagination";

export function useBookings() {
  const queryClient = useQueryClient();
  //filter
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { type: "status", value: filterValue, method: "eq" };

  //sort
  const sortByValue = searchParams.get("sortBy") || "checkInDate-desc";

  const [field, direction] = sortByValue.split("-");
  const sortBy = { field, direction };

  //pagination
  const page = Number(searchParams.get("page")) || 1;

  //query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //Pre-fetching
  //next page
  const pages = count / pageSteps;
  if (page < pages)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  //preview page
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, bookings, error, count };
}
