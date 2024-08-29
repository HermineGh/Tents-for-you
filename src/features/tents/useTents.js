import { useQuery } from "@tanstack/react-query";
import { getTents } from "../../services/apiTents";

export function useTents() {
  const {
    isLoading,
    data: tentsData,
    error,
  } = useQuery({
    queryKey: ["tents"],
    queryFn: getTents,
  });
  return { isLoading, tentsData, error };
}
