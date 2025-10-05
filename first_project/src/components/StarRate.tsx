import React from "react";
import { useState } from "react";
import type { MouseEventHandler } from "react";

type StarProps = {
  size?: number;
  filled?: boolean;
  color?: string;
  onMouseEnter?: MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: MouseEventHandler<SVGSVGElement>;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Star = ({
  size = 20,
  filled = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: StarProps) => (
  <svg
    width={size}
    height={size}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill={filled ? "gold" : "gray"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2 L15 10 H23 L17 15 L19 23 L12 18 L5 23 L7 15 L1 10 H9 Z" />
  </svg>
);
type RateItem = {
  hovered: boolean;
  selected: boolean;
};
export default function StarRate() {
  const rateCount = 5;
  const baseObj: RateItem = { hovered: false, selected: false };

  const [selected, setSelected] = useState(0);
  const [rates, setRates] = useState<RateItem[]>(
    Array.from({ length: rateCount }, () => ({ ...baseObj }))
  );

  function handleHoverEnter(index: number) {
    setRates(
      rates.map((rate, i) => ({
        ...rate,
        hovered: i <= index,
        selected: false,
      }))
    );
  }
  function handleHoverLeave(index: number) {
    setRates(
      rates.map((rate, i) => ({
        ...rate,
        hovered: i <= index,
        selected: false,
      }))
    );
  }
  function handleHoverLeaveFromDiv() {
    setRates(
      rates.map((rate, i) => ({
        ...rate,
        selected: i <= selected,
        hovered: false,
      }))
    );
  }

  function handleClicked(index: number) {
    setSelected(index);
    setRates(rates.map((rate, i) => ({ ...rate, selected: i <= index })));
  }
  return (
    <>
      <div
        style={{ display: "flex", gap: "10px" }}
        onMouseLeave={handleHoverLeaveFromDiv}
      >
        {rates.map((item, index) => (
          <Star
            filled={item.hovered || item.selected ? true : false}
            onMouseEnter={() => handleHoverEnter(index)}
            onMouseLeave={() => handleHoverLeave(index)}
            onClick={() => handleClicked(index)}
          />
        ))}
      </div>
    </>
  );
}
