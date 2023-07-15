import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export default function Button({ className, children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <button
        className={`${className} modal-btn`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </button>

      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}
