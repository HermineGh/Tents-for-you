import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signout as apiSignOut } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useSignout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate: signOut } = useMutation({
    mutationFn: apiSignOut,
    onSuccess: () => {
      queryClient.removeQueries();
      queryClient.invalidateQueries({
        queryKey: ["user"],
      }),
        navigate("/login", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isLoading, signOut };
}
