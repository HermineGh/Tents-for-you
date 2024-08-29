import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary
    FallbackComponent={ErrorBoundary}
    onReset={() => window.location.replace("/")}
  >
    <App />
  </ErrorBoundary>
);
