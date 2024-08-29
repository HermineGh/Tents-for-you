import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditTent } from "../../services/apiTents";
import toast from "react-hot-toast";

export function useEditTent() {
  const queryClient = useQueryClient();

  const { isLoading: editing, mutate: editTent } = useMutation({
    mutationFn: ({ newTentData, id }) => createEditTent(newTentData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tents"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editing, editTent };
}
