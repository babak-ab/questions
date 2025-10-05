import type { ReactNode } from "react";

type VerticalLayoutProps = {
  children: ReactNode;
  spacing?: string;
  padding?: string;
  border?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
  align?: "left" | "center" | "right"; // 🔑 new prop
};

export default function VerticalLayout(props: VerticalLayoutProps) {
  const spacingClass = `gap-y-${props.spacing}`;
  const paddingClass = `p-${props.padding}`;
  const borderClass = props.border ? `border` : ``;
  const fillWidthClass = props.fillWidth ? "w-full" : "";
  const fillHeightClass = props.fillHeight ? "h-full" : "";

  const alignClass =
    props.align === "left"
      ? "justify-start"
      : props.align === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div
      className={`flex flex-col items-center ${alignClass} ${spacingClass} ${paddingClass} ${borderClass} ${fillWidthClass} ${fillHeightClass}`}
    >
      {props.children}
    </div>
  );
}
