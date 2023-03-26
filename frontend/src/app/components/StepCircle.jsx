"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { SetupContext } from "./context";

const StepCircle = ({ step, withLine = true }) => {
  const { completedSteps, currentStep } = useContext(SetupContext);

  const completedStyle = completedSteps.includes(step)
    ? "bg-green-300 border-green-300 border-gray-300"
    : "bg-gray-300 ";
  const currentStyle = currentStep === step ? "ring-sky-500 animate-pulse " : "ring-gray-400";

  return (
    <>
      <div
        className={
          "rounded-full w-16 h-16 grid place-items-center ring-2   " +
          completedStyle +
          currentStyle
        }
      >
        <CheckIcon className="w-8 h-8 text-white" />
      </div>
      {withLine && (
        <div className={"border-dotted border-t-2 w-32 h-2 " + currentStyle} />
      )}
    </>
  );
};

export default StepCircle;
