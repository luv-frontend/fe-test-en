import { useState, useEffect, useRef } from "react";

export function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggle, ref };
}
