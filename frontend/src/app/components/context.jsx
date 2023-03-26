'use client'

const { createContext, useState } = require("react");

export const SetupContext = createContext({
  startSetup: false,
  setStartSetup: () => {},
  completedSteps: [],
  setCompletedSteps: () => {},
  onStartSetupClick: () => {},
  message: null,
  currentStep: 0,
  message: null,
});

export const SetupContextProvider = ({ children }) => {
  const [startSetup, setStartSetup] = useState(false);
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])
  const [message, setMessage] = useState()

  const onStartSetupClick = () => {
    setStartSetup(true)
    setCompletedSteps([])
    setCurrentStep(0)
    setMessage(null)
    const ws = new WebSocket("ws://localhost:8000/test/ws")
    ws.onmessage = (event) => {
        const { data } = event
        const response = JSON.parse(data)
        setCurrentStep(response.current_step)
        setCompletedSteps(response.completed)
        setMessage(response.message)
    }

    ws.onclose = (event) => {
        setStartSetup(false)
    }
  }

  const ctx = {
    startSetup,
    setStartSetup,
    completedSteps,
    onStartSetupClick,
    currentStep,
    message
  };

  return <SetupContext.Provider value={ctx}>{children}</SetupContext.Provider>;
};
