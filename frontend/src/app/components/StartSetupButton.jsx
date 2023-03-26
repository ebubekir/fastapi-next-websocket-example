"use client";
import { useContext } from "react";
import { SetupContext } from "./context";

const StartSetupButton = () => {
  const { onStartSetupClick, startSetup } = useContext(SetupContext);

  return (
    <div className="w-full grid place-items-center mb-8">
      <button
        disabled={startSetup}
        onClick={onStartSetupClick}
        className="bg-sky-500 hover:bg-sky-600 disabled:bg-gray-500 focus:bg-sky-700 text-white px-4 py-2 rounded-md"
      >
        Start Setup!
      </button>
    </div>
  );
};

export default StartSetupButton;
