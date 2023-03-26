import SetupProgress from "./SetupProgress";
import SetupText from "./SetupText";
import StartSetupButton from "./StartSetupButton";

const SetupCardContainer = () => (
  <div className="w-fit h-[300px] px-8 py-8 shadow-lg">
    <StartSetupButton />
    <SetupProgress />
    <SetupText />
  </div>
);

export default SetupCardContainer;
