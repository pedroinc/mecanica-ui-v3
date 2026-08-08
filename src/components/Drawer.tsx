import { useEffect, type ReactNode } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6z" />
  </svg>
);

interface DrawerProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Drawer({ open, title, onClose, children }: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <Transition show={open} as="div" className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-stretch">
      <TransitionChild
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      </TransitionChild>

      <TransitionChild
        enter="transition-transform ease-out duration-300"
        enterFrom="translate-y-full sm:translate-y-0 sm:translate-x-full"
        enterTo="translate-y-0 sm:translate-x-0"
        leave="transition-transform ease-in duration-200"
        leaveFrom="translate-y-0 sm:translate-x-0"
        leaveTo="translate-y-full sm:translate-y-0 sm:translate-x-full"
      >
        <div className="relative flex max-h-[90vh] w-full flex-col bg-white shadow-xl sm:ml-auto sm:h-full sm:max-h-none sm:w-full sm:max-w-md">
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
            <span className="text-lg font-semibold text-neutral-800">{title}</span>
            <button
              type="button"
              aria-label="fechar"
              onClick={onClose}
              className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </div>
      </TransitionChild>
    </Transition>
  );
}
