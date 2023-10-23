import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-2 xl:px-20">
      {children}
    </div>
  );
}
