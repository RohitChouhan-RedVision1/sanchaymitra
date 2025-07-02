"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils"; // Make sure this exists in your project

const Slider = forwardRef(
  (
    {
      className,
      value,
      onValueChange,
      min = 0,
      max = 100,
      step = 1,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative w-full", className)} {...props}>
        <input
          ref={ref}
          type="range"
          value={value}
          onChange={(e) => onValueChange([parseInt(e.target.value)])}
          min={min}
          max={max}
          step={step}
          className="slider w-full h-2 appearance-none bg-transparent"
        />
        <div
          className="absolute top-1/2 left-0 h-2 rounded-full bg-[--rv-primary] -translate-y-1/2 pointer-events-none"
          style={{
            width: `${((value - min) / (max - min)) * 100}%`,
          }}
        />
        <style jsx>{`
          .slider {
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
          }

          .slider::-webkit-slider-runnable-track {
            height: 8px;
            background: gray;
            border-radius: 9999px;
          }

          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            background: var(--rv-primary);
            border-radius: 9999px;
            cursor: pointer;
            margin-top: -4px;
            border: none;
          }

          .slider::-moz-range-track {
            height: 8px;
            background: #d1d5db;
            border-radius: 9999px;
          }

          .slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: var(--rv-primary);
            border: none;
            border-radius: 50%;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
);

Slider.displayName = "Slider";

export { Slider };