import { useEffect } from "react";

export default function useClick(ref, is, setIs) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!is) return;
        setIs(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, is, setIs]);
}
