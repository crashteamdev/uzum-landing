import React, { useState, useId, PropsWithChildren, useRef, useEffect } from "react";
import { clsx } from "clsx";
import ArrowIcon from "../icons/arrowIcon";
import PlusIcon from "../icons/plusIcon";
import MinusIcon from "../icons/minusIcon";

type CommonProps = {
  title: string;
  description?: string;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  titleSize?: "default" | "big" | "large";
};

type ControlledProps = {
  uncontrolled?: false;
  open: boolean;
  setOpen: (value: boolean) => void;
} & CommonProps;

type UncontrolledProps = {
  uncontrolled: true;
  defaultOpen?: boolean;
} & CommonProps;

type Props = PropsWithChildren<ControlledProps | UncontrolledProps>;

export const AppAccordion: React.FC<Props> = ({
  title,
  description = "",
  titleSize = "default",
  className = "",
  headerClassName = "",
  contentClassName = "",
  children,
  ...props
}) => {
  const controlId = useId();

  const [localOpen, setLocalOpen] = useState(props.uncontrolled ? props.defaultOpen : false);

  const [height, setHeight] = useState<number>();

  const open = props.uncontrolled ? localOpen : props.open;

  const setOpen = props.uncontrolled ? setLocalOpen : props.setOpen;

  const elementRef = useRef<HTMLDivElement>(null);

  const panelStyle = { ...(Boolean(open) && { maxHeight: height ?? 5000 }) };

  useEffect(() => {
    const defaultMinHeight = 88;

    setHeight(
      Math.max(
        elementRef.current?.getBoundingClientRect().height ?? 0,
        elementRef.current?.scrollHeight ?? 0
      ) + defaultMinHeight
    );
  }, [elementRef]);

  return (
    <div className={clsx("border-[1.5px] rounded-[16px] border-[#243752]", className, {
      "bg-[#FFD27A]": open
    })}>
      <button
        className={clsx(
          "flex justify-between items-start w-full text-start p-6 max-md:p-4 text-white",
          headerClassName,
          {
            "!text-[#061C3D]": open
          }
        )}
        aria-expanded={open}
        {...(open ? { "aria-controls": controlId } : {})}
        onClick={() => setOpen(!open)}
      >
        <span>
          <span
            className={clsx({
              "text-[20px] font-semibold leading-[28px] tracking-[-0.24px] max-md:text-[16px] max-md:leading-[24px]": titleSize === "default"
            })}
          >
            {title}
          </span>
          {description !== "" && (
            <div className={clsx("mt-4", { hidden: !open })}>{description}</div>
          )}
        </span>
        {!open ? <PlusIcon /> : <MinusIcon /> }
        {/* <div className={clsx("rotate-[90deg]", { "rotate-[270deg]": open })}>
          <ArrowIcon color="black"/>
        </div> */}
      </button>

      <div className='overflow-hidden duration-1000 max-h-0' style={panelStyle} id={controlId}>
        <div
          className={clsx(
            "text-white pt-6 max-md:pt-0 px-[24px] pb-[24px] text-[16px] max-md:text-[14px] max-md:leading-[20px] font-normal leading-[24px] max-md:p-4", 
            contentClassName,
            {
              "!text-[#061C3D]": open
            }
          )}
          ref={elementRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
