import { useEffect, useRef } from "react";

export function useOutsideClick(handleFn, eventDirection = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handleFn();
        }
      }
      document.addEventListener("click", handleClick, eventDirection);

      return () =>
        document.removeEventListener("click", handleClick, eventDirection);
    },
    [eventDirection, handleFn]
  );
  return ref;
}
