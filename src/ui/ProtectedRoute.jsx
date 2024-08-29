import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const { isLoading, authenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!authenticated && !isLoading) navigate("./login");
    },
    [navigate, authenticated, isLoading]
  );

  if (isLoading) return <Spinner />;
  if (authenticated) return children;
}
ProtectedRoute.propTypes = {
  children: PropTypes.any,
};
export default ProtectedRoute;
