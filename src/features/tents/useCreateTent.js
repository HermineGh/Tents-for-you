import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditTent } from "../../services/apiTents";
import toast from "react-hot-toast";

export function useCreateTent() {
  const queryClient = useQueryClient();
  const { isLoading: creating, mutate: createTent } = useMutation({
    mutationFn: createEditTent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tents"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { creating, createTent };
}
