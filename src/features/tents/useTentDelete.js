import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteTent as delTentApi } from "../../services/apiTents";

export function useTentDelete() {
  const queryClient = useQueryClient();
  const { isLoading: deleting, mutate: deleteTent } = useMutation({
    mutationFn: delTentApi,
    onSuccess: () => {
      toast.success("The tent deleted");
      queryClient.invalidateQueries({
        queryKey: ["tents"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleting, deleteTent };
}
