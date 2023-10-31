"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`flex w-full items-center justify-center gap-2 rounded-md border-slate-700 transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${
        outline ? "bg-white" : "bg-slate-700"
      } ${outline ? "text-slate-700" : "text-white"} ${
        small ? "text-sm font-light" : "text-base font-semibold"
      } ${small ? "border-[1px] px-2 py-1" : "border-[2px] px-4 py-3"} ${
        custom ? custom : ""
      }`}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
}
