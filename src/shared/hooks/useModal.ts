"use client";

import { useCallback, useState } from "react";

export const useModal = (isOpen = false) => {
  const [open, setOpen] = useState(isOpen);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);

  const handleToggle = useCallback(() => setOpen(!open), [open]);

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle
  };
};
