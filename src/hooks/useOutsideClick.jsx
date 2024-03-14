import { useEffect, useState } from "react";

export default function useOutsideClick(ref, isActive) {
  const [isOutsideClick, setIsOutsideClick] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutsideClick(true);
      } else {
        setIsOutsideClick(false);
      }
    }

    // Only add the event listener if `isActive` is true
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isActive]);

  return isOutsideClick;
}
