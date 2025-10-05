import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: ModalProps) {
  const overlayClasses =
    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm";

  const modalClasses =
    "bg-background-100 rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto";

  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={overlayClasses} onClick={handleOverlayClick}>
      <div className={modalClasses} role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  );
}
