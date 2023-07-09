import { useState } from "react";
import { Modal } from "./Modal";

const BTN_STYLE = {
  width: "50%",
  fontSize: "1vw",
  textAlign: "start",
};

export default function Button({ className, children }) {
  const [isOpen, setIsOpen] = useState(false);

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
