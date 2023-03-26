import SetupCardContainer from "@/app/components/SetupCardContainer";
import { SetupContextProvider } from "./components/context";

export default function Home() {
  return (
    <SetupContextProvider>
      <SetupCardContainer />
    </SetupContextProvider>
  );
}
