"use client";

import React from "react";
import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { useScrollbarWidth } from "@/shared/hooks/useScrollbarWidth";
import clsx from "clsx";
import CloseIcon from "../icons/close";

type Props = {
  isOpen: boolean;
  closeHandler?: () => void;
  className?: string;
  contentClassName?: string;
  childrenClassName?: string;
};

type PropsModal = {
  closeHandler?: () => void;
  className?: string;
  childrenClassName?: string;
};

export const ModalContent: React.FC<PropsWithChildren<PropsModal>> = ({
  children,
  closeHandler,
  className,
  childrenClassName
}) => {
  const scrollbarWidth = useScrollbarWidth();

  useEffect(() => {
    const listenerHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler?.();
      }
    };

    document.addEventListener("keydown", listenerHandler);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.removeEventListener("keydown", listenerHandler);
      document.body.style.removeProperty("overflow");
      document.body.style.paddingRight = "0px";
    };
  }, [closeHandler, scrollbarWidth]);

  return (
    <div
      className={clsx(
        "relative flex flex-col",
        "lg:min-h-[220px] lg:max-h-[600px] lg:w-[600px] min-h-full w-full",
        "rounded-[18px] bg-white text-black",
        className
      )}
    >
      {closeHandler && (
        <button
          type='button'
          className='absolute right-1 top-1 h-9 w-9 rounded-2 flex items-center justify-center'
          onClick={closeHandler}
        >
          <CloseIcon color="black" />
        </button>
      )}

      <div className={clsx("overflow-scroll no-scrollbar", childrenClassName)}>{children}</div>
    </div>
  );
};

export const AppModal: React.FC<PropsWithChildren<Props>> = ({
  closeHandler,
  isOpen = false,
  className,
  contentClassName,
  childrenClassName,
  children
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed z-50 inset-x-0 inset-y-0 w-full lg:p-4 lg:pt-0 pt-[124px] overflow-y-auto no-scrollbar",
        "flex flex-col items-center justify-center",
        "bg-blueGray-900/60",
        className
      )}
    >
      <ModalContent
        className={contentClassName}
        childrenClassName={childrenClassName}
        closeHandler={closeHandler}
      >
        {children}
      </ModalContent>
    </div>,
    document.body as HTMLElement
  );
};
