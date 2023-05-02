import React from 'react';

export interface UseDialogReturn {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDialog = (defaultOpen = false): UseDialogReturn => {
  const [open, setOpen] = React.useState<boolean>(defaultOpen);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return { onOpen, onClose, open };
};

export default useDialog;
