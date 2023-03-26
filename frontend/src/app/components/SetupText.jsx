"use client";

import { SetupContext } from "./context";
import { useContext } from "react";

const SetupText = () => {
  const { message } = useContext(SetupContext);
  return (
    <div className="text-center text-gray-300 mt-4">
      <small>{message}</small>
    </div>
  );
};

export default SetupText;
