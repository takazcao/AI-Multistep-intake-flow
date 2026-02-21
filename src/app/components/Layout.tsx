import { TopStepper } from "./TopStepper";
import { Sidebar } from "./Sidebar";
import { AIPreview } from "./AIPreview";
import { useStepContext } from "./StepContext";
import { GeneralSettings } from "./steps/GeneralSettings";
import { KnowledgeSources } from "./steps/KnowledgeSources";
import { ResponseTemplates } from "./steps/ResponseTemplates";
import { ToneAndStyle } from "./steps/ToneAndStyle";
import { IntegrationSettings } from "./steps/IntegrationSettings";
import { TicketTriage } from "./steps/TicketTriage";
import { ReviewAndTest } from "./steps/ReviewAndTest";
import { Deployment } from "./steps/Deployment";

const STEP_COMPONENTS = [
  GeneralSettings,
  KnowledgeSources,
  ResponseTemplates,
  ToneAndStyle,
  IntegrationSettings,
  TicketTriage,
  ReviewAndTest,
  Deployment,
];

export function Layout() {
  const { currentStepIndex } = useStepContext();
  const StepComponent = STEP_COMPONENTS[currentStepIndex];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#2d3544] p-6">
      <div className="w-full max-w-[1440px] h-full max-h-[920px] bg-[#111827] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-[#4b5563]/30">
        {/* Top Stepper */}
        <TopStepper />

        {/* Main Content */}
        <div className="flex flex-1 min-h-0">
          {/* Left Sidebar */}
          <Sidebar />

          {/* Center Content */}
          <div className="flex-1 overflow-y-auto bg-[#131720]">
            <div className="p-8 max-w-[700px]">
              <StepComponent />
            </div>
          </div>

          {/* Right AI Preview */}
          <AIPreview />
        </div>
      </div>
    </div>
  );
}