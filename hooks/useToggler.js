import { useState } from "react";

export default function useToggler(initial = false) {
  const [show, setShow] = useState(initial);

  function toggle() {
    setShow((prevState) => !prevState);
  }

  return [show, toggle];
}
