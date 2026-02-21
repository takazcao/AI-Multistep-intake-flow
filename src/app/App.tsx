import { StepProvider } from "./components/StepContext";
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <StepProvider>
      <Layout />
    </StepProvider>
  );
}
