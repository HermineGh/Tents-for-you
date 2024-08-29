import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiAuthentication";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      }),
        navigate("/tents");
    },
    onError: () => toast.error("Incorrect login or password"),
  });
  return { isLoading, login };
}
