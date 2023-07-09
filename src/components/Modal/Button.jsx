import { useState, useEffect } from "react";
import { Modal } from "./Modal";

const BTN_STYLE = {
  fontSize: "1vw",
  textAlign: "start",
};

export default function Button({ className, children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <button
        style={BTN_STYLE}
        className={className}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </button>

      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}
