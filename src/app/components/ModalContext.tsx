import { createContext, useContext, useState, ReactNode } from "react";
import { CallModal } from "./CallModal";

interface ModalContextType {
  openModal: (programName?: string) => void;
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [programName, setProgramName] = useState<string | undefined>();

  const openModal = (name?: string) => {
    setProgramName(name);
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <CallModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        programName={programName}
      />
    </ModalContext.Provider>
  );
}
