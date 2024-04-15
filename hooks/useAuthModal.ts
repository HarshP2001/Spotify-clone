import { create } from "zustand";

interface AuhtModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useAuthModal = create<AuhtModalStore>()((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false })
}));

export default useAuthModal;