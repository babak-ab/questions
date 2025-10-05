import type { ReactNode } from "react";

type HorizontalLayoutProps = {
  children: ReactNode;
  spacing?: string;
  padding?: string;
  border?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
  align?: "left" | "center" | "right"; // 🔑 new prop
};

export default function HorizontalLayout(props: HorizontalLayoutProps) {
  const spacingClass = `gap-x-${props.spacing}`;
  const paddingClass = `p-${props.padding}`;
  const borderClass = props.border ? "border" : "";
  const fillWidthClass = props.fillWidth ? "w-full" : "";
  const fillHeightClass = props.fillHeight ? "h-full" : "";

  // map align prop to Tailwind class
  const alignClass =
    props.align === "left"
      ? "justify-start"
      : props.align === "right"
      ? "justify-end"
      : "justify-between";

  return (
    <div
      className={`flex flex-row  items-center ${alignClass} ${spacingClass} ${paddingClass} ${borderClass} ${fillWidthClass} ${fillHeightClass}`}
    >
      {props.children}
    </div>
  );
}
