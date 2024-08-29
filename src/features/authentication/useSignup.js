import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as apiSignUp } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: signUp } = useMutation({
    mutationFn: apiSignUp,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isLoading, signUp };
}
