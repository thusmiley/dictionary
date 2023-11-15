import { useEffect } from "react";

export default function useClick(ref, show, setShow) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, show, setShow]);
}
