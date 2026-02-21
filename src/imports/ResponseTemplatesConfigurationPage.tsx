import svgPaths from "./svg-itxu2hlyg";

function Button() {
  return (
    <div className="relative shrink-0 size-[13.969px]" data-name="Button">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9688 13.9688">
        <g id="Button">
          <path d={svgPaths.p30539200} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-px relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-[171.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">1. AGENT CONFIGURATION</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[7.82px] relative shrink-0 w-[14.254px]" data-name="Margin">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2539 7.82031">
        <g id="Margin">
          <path d={svgPaths.p3e64b000} fill="var(--fill-0, #10B981)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Margin1 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#10b981] text-[12px] tracking-[0.6px] w-[71.27px]">
        <p className="leading-[16px] whitespace-pre-wrap">COMPLETE</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative w-full">
        <Container />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Support Specialist</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="h-full opacity-50 relative shrink-0 w-[379.75px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[24px] pr-[25px] py-[16px] relative size-full">
        <Margin />
        <Container3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-[156.02px]">
        <p className="leading-[16px] whitespace-pre-wrap">2. KNOWLEDGE SOURCES</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[7.82px] relative shrink-0 w-[14.254px]" data-name="Margin">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2539 7.82031">
        <g id="Margin">
          <path d={svgPaths.p3e64b000} fill="var(--fill-0, #10B981)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Margin3 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#10b981] text-[12px] tracking-[0.6px] w-[71.27px]">
        <p className="leading-[16px] whitespace-pre-wrap">COMPLETE</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative w-full">
        <Container4 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Help Center, API Docs</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="h-full opacity-50 relative shrink-0 w-[379.75px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[24px] pr-[25px] py-[16px] relative size-full">
        <Margin2 />
        <Container7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#3b82f6] text-[12px] tracking-[0.6px] uppercase w-[163.81px]">
        <p className="leading-[16px] whitespace-pre-wrap">3. RESPONSE TEMPLATES</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[9.352px] relative shrink-0 w-[13.352px]" data-name="Margin">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3516 9.35156">
        <g id="Margin">
          <path d={svgPaths.p3fb3c700} fill="var(--fill-0, #3B82F6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Margin5 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#3b82f6] text-[12px] tracking-[0.6px] w-[62.08px]">
        <p className="leading-[16px] whitespace-pre-wrap">CURRENT</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative w-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
          <p className="leading-[20px] whitespace-pre-wrap">{`Standard Replies & Variables`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#232732] h-full relative shrink-0 w-[379.75px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[24px] pr-[25px] py-[16px] relative size-full">
        <Margin4 />
        <Container11 />
        <div className="absolute bg-[#3b82f6] h-[4px] left-0 right-px top-0" data-name="Background" />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-[179.41px]">
        <p className="leading-[16px] whitespace-pre-wrap">4. INTEGRATION SETTINGS</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[11.648px] relative shrink-0 w-[15.648px]" data-name="Margin">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6484 11.6484">
        <g id="Margin">
          <path d={svgPaths.p32283a00} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Margin7 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px] w-[58.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">PENDING</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Slack, Zendesk</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-full opacity-40 relative shrink-0 w-[378.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative size-full">
        <Margin6 />
        <Container16 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-px relative size-full">
        <VerticalBorder />
        <VerticalBorder1 />
        <VerticalBorder2 />
        <BackgroundVerticalBorder />
        <Container12 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Configure Responses</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Define how the AI agent constructs</p>
        <p className="mb-0">answers using templates and dynamic</p>
        <p>variables.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[7.82px] relative shrink-0 w-[10.254px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2539 7.82031">
        <g id="Container">
          <path d={svgPaths.p3e64b000} fill="var(--fill-0, #10B981)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(16,185,129,0.2)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#10b981] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container22 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[16px] relative shrink-0 w-[48px] z-[2]" data-name="Margin">
      <OverlayBorder />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] tracking-[0.35px] uppercase w-[140px]">
        <p className="leading-[20px] whitespace-pre-wrap">General Settings</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <Margin8 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[7.56px]">
        <p className="leading-[16px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(59,130,246,0.3),0px_4px_6px_-4px_rgba(59,130,246,0.3)] size-[32px] top-1/2" data-name="Overlay+Shadow" />
      <Container25 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[16px] relative shrink-0 w-[48px] z-[2]" data-name="Margin">
      <Background />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] uppercase w-[157.5px]">
        <p className="leading-[20px] whitespace-pre-wrap">Response Templates</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <Margin9 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[7.53px]">
          <p className="leading-[16px] whitespace-pre-wrap">3</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container28 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[16px] relative shrink-0 w-[48px] z-[2]" data-name="Margin">
      <BackgroundBorder />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] tracking-[0.35px] uppercase w-[105px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Tone & Style`}</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex isolate items-center opacity-50 relative shrink-0 w-full" data-name="Container">
      <Margin10 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[7.88px]">
          <p className="leading-[16px] whitespace-pre-wrap">4</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container31 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[16px] relative shrink-0 w-[48px] z-[2]" data-name="Margin">
      <BackgroundBorder1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] tracking-[0.35px] uppercase w-[113.75px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Review & Test`}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex isolate items-center opacity-50 relative shrink-0 w-full" data-name="Container">
      <Margin11 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[7.25px]">
          <p className="leading-[16px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container34 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[16px] relative shrink-0 w-[48px] z-[2]" data-name="Margin">
      <BackgroundBorder2 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] tracking-[0.35px] uppercase w-[87.5px]">
        <p className="leading-[20px] whitespace-pre-wrap">Deployment</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex isolate items-center opacity-50 relative shrink-0 w-full" data-name="Container">
      <Margin12 />
      <Container35 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-[#374151] bottom-[16px] left-[15px] top-[40px] w-[2px]" data-name="Vertical Divider" />
      <Container21 />
      <Container24 />
      <Container27 />
      <Container30 />
      <Container33 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[32px] relative w-full">
        <Heading />
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#374151] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#3b82f6] h-[6px] left-0 right-[65%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[32px] relative w-full">
        <Background1 />
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-[101.41px]">
          <p className="leading-[16px] whitespace-pre-wrap">35% Completed</p>
        </div>
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="flex-[1_0_0] min-h-[94px] min-w-px relative w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[674.594px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[10.688px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6875 10.6875">
        <g id="Container">
          <path d={svgPaths.p338dc600} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="Margin">
      <Container37 />
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Margin14 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] text-center w-[176.88px]">
          <p className="leading-[20px] whitespace-pre-wrap">Previous: General Settings</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#1f232e] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[25px] px-[24px] relative w-full">
        <Button1 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="bg-[#1a1d26] h-full relative shrink-0 w-[320px]" data-name="Background+VerticalBorder">
      <div className="content-stretch flex flex-col items-start overflow-clip pr-px relative rounded-[inherit] size-full">
        <Container18 />
        <Margin13 />
        <BackgroundHorizontalBorder />
      </div>
      <div aria-hidden="true" className="absolute border-[#374151] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[0.45px] uppercase w-[168.75px]">
        <p className="leading-[28px] whitespace-pre-wrap">Create Template</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-[407.7px]">
        <p className="leading-[20px] whitespace-pre-wrap">Define a structured response pattern for specific user intents.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Container40 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1f2937] content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[12px] text-center w-[32.27px]">
        <p className="leading-[16px] whitespace-pre-wrap">Reset</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col items-center justify-center pb-[7.5px] pt-[6.5px] px-[12px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px] shadow-[0px_10px_15px_-3px_rgba(59,130,246,0.2),0px_4px_6px_-4px_rgba(59,130,246,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[84.17px]">
        <p className="leading-[16px] whitespace-pre-wrap">Save Template</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
      <Button3 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Button2 />
      <ButtonMargin />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container41 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Template Name</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Subscription Inquiry Response</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#2a2f3d] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[13px] py-[9px] relative w-full">
          <Container44 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Category</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="SVG">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="SVG">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38px] items-end justify-center left-0 overflow-clip pl-[340px] pr-[9px] py-[8.5px] top-0 w-[370px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container47() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[13px] overflow-clip right-[13px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[147.09px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Billing & Subscriptions`}</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#2a2f3d] h-[38px] relative rounded-[6px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <ImageFill />
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[4.32px] right-[12px] top-[10px] w-[7px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4.32031">
        <g id="Container">
          <path d={svgPaths.p26e3180} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Options />
      <Container48 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Label1 />
      <Container46 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start justify-center relative w-full">
        <Container43 />
        <Container45 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#1f232e] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative w-full">
        <Container42 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px] whitespace-pre-wrap">Trigger Conditions</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[16px] whitespace-pre-wrap">Select intents or keywords that should trigger this response template.</p>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 size-[6.984px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 6.98438 6.98438">
        <g id="Container">
          <path d={svgPaths.p20c62380} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container51 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative">
        <Button4 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#2a2f3d] content-stretch flex items-center px-[9px] py-[5px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[12px] w-[148.52px]">
        <p className="leading-[16px] whitespace-pre-wrap">intent: subscription_status</p>
      </div>
      <ButtonMargin1 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[6.984px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 6.98438 6.98438">
        <g id="Container">
          <path d={svgPaths.p20c62380} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container52 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative">
        <Button5 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#2a2f3d] content-stretch flex items-center px-[9px] py-[5px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[12px] w-[101.31px]">
        <p className="leading-[16px] whitespace-pre-wrap">{`keyword: "renew"`}</p>
      </div>
      <ButtonMargin2 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="h-[6.984px] relative shrink-0 w-[10.984px]" data-name="Margin">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9844 6.98438">
        <g id="Margin">
          <path d={svgPaths.p18a20e80} fill="var(--fill-0, #D1D5DB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#2a2f3d] content-stretch flex items-center px-[9px] py-[5px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-dashed inset-0 pointer-events-none rounded-[6px]" />
      <Margin15 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[12px] w-[80.78px]">
        <p className="leading-[16px] whitespace-pre-wrap">Add Condition</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start py-[4px] relative w-full">
        <BackgroundBorder3 />
        <BackgroundBorder4 />
        <BackgroundBorder5 />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pf079980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Svg1 />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#2a2f3d] content-stretch flex flex-col items-start mr-[-1px] p-px relative rounded-[6px] shrink-0 size-[18px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <ImageFill1 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-1px] pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] w-[177.14px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Require confidence > 80%`}</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[-1px] pr-px top-[calc(50%+8.5px)]" data-name="Label">
      <Input1 />
      <Margin16 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="h-[37px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label3 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-[#1f232e] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[25px] relative w-full">
        <Label2 />
        <Container49 />
        <Container50 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-[101.41px]">
        <p className="leading-[16px] whitespace-pre-wrap">Response Body</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[11.074px] relative shrink-0 w-[12.852px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8516 11.0742">
        <g id="Container">
          <path d={svgPaths.p2c6f8300} fill="var(--fill-0, #3B82F6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container54 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
      <Margin18 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#3b82f6] text-[12px] text-center w-[94.11px]">
        <p className="leading-[16px] whitespace-pre-wrap">Generate with AI</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Button6 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pb-[12px] right-[25px] top-[25px]" data-name="Margin">
      <Container53 />
    </div>
  );
}

function Margin20() {
  return (
    <div className="h-[13.648px] relative shrink-0 w-[19.648px]" data-name="Margin">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6484 13.6484">
        <g id="Margin">
          <path d={svgPaths.p3461bc00} fill="var(--fill-0, #3B82F6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Code() {
  return (
    <div className="bg-[rgba(30,58,138,0.5)] content-stretch flex items-start px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Code">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#bfdbfe] text-[12px] w-[136.81px]">
        <p className="leading-[16px] whitespace-pre-wrap">{`{{user.first_name}}`}</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#93c5fd] text-[12px] w-[78.16px]">
          <p className="leading-[16px] whitespace-pre-wrap">{`Variables like `}</p>
        </div>
        <Code />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#93c5fd] text-[12px] w-[384.59px]">
          <p className="leading-[16px] whitespace-pre-wrap">{` will be dynamically replaced with real data during the conversation.`}</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(30,58,138,0.1)] relative rounded-[6px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(30,58,138,0.3)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex items-start p-[13px] relative w-full">
        <Margin20 />
        <Container55 />
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pt-[16px] right-[25px] top-[294px]" data-name="Margin">
      <OverlayBorder1 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[8.176px] relative shrink-0 w-[6.289px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 6.28906 8.17578">
        <g id="Container">
          <path d={svgPaths.p3ebcd28} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[4px] relative">
        <Container57 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[8.176px] relative shrink-0 w-[7px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8.17578">
        <g id="Container">
          <path d={svgPaths.p2f097ec0} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Button">
      <Container58 />
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative">
        <Button8 />
      </div>
    </div>
  );
}

function Margin21() {
  return (
    <div className="h-[16px] relative shrink-0 w-[5px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <div className="bg-[#4b5563] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[5.852px] relative shrink-0 w-[11.648px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 5.85156">
        <g id="Container">
          <path d={svgPaths.p5d0c800} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Button">
      <Container59 />
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative">
        <Button9 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[5.852px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 5.85156">
        <g id="Container">
          <path d={svgPaths.p27a79e80} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Button">
      <Container60 />
    </div>
  );
}

function ButtonMargin5() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative">
        <Button10 />
      </div>
    </div>
  );
}

function Margin22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[5px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <div className="bg-[#4b5563] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[8.016px] relative shrink-0 w-[9.984px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 9.98438 8.01562">
        <g id="Container">
          <path d={svgPaths.p14a6a220} fill="var(--fill-0, #3B82F6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin23() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container61 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Button">
      <Margin23 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#3b82f6] text-[12px] text-center w-[82.88px]">
        <p className="leading-[16px] whitespace-pre-wrap">Insert Variable</p>
      </div>
    </div>
  );
}

function ButtonMargin6() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative">
        <Button11 />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#2a2f3d] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-[#4b5563] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[8px] pt-[9px] px-[9px] relative w-full">
          <Button7 />
          <ButtonMargin3 />
          <Margin21 />
          <ButtonMargin4 />
          <ButtonMargin5 />
          <Margin22 />
          <ButtonMargin6 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#e5e7eb] text-[14px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`Hello {{user.first_name}},`}</p>
          <p className="mb-0">{`I see you're asking about your subscription status. According to our records, your `}</p>
          <p className="mb-0">{`current plan is {{user.plan_name}} and it is set to renew on {{user.renewal_date}}.`}</p>
          <p className="mb-0">{`You can manage your subscription directly here: {{link.billing_portal}}`}</p>
          <p>Is there anything else I can help you with regarding your account?</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#161920] h-[192px] relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center p-[17px] relative size-full">
          <Container62 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b5563] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-br-[6px]" />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[57px]" data-name="Container">
      <BackgroundBorder6 />
      <Textarea />
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-[#1f232e] h-[383px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin17 />
      <Margin19 />
      <Container56 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#161920] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Container38 />
          <BackgroundBorderShadow1 />
          <BackgroundBorderShadow2 />
          <BackgroundBorderShadow3 />
        </div>
      </div>
    </div>
  );
}

function Margin24() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[84.44px]">
        <p className="leading-[20px] whitespace-pre-wrap">Live Preview</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <div className="bg-[#3b82f6] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Margin24 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3197d7c0} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <Container64 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Container63 />
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] w-[78px]">
        <p className="leading-[15px] whitespace-pre-wrap">TODAY 9:41 AM</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container66 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col items-start max-w-[298.3500061035156px] pl-[12px] pr-[37.73px] py-[12px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[2px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Background+Shadow">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[248.61px] whitespace-pre-wrap">
        <p className="mb-0">Hi, when does my subscription renew</p>
        <p>next?</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Margin25() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container67 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[11.52px]">
        <p className="leading-[16px] whitespace-pre-wrap">AI</p>
      </div>
    </div>
  );
}

function Margin27() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[8px] relative shrink-0 w-[40px]" data-name="Margin">
      <Background4 />
    </div>
  );
}

function Margin28() {
  return (
    <div className="content-stretch flex flex-col h-[6px] items-start pl-[4px] relative shrink-0 w-[10px]" data-name="Margin">
      <div className="bg-[#9ca3af] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
    </div>
  );
}

function Margin29() {
  return (
    <div className="content-stretch flex flex-col h-[6px] items-start pl-[4px] relative shrink-0 w-[10px]" data-name="Margin">
      <div className="bg-[#9ca3af] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <div className="bg-[#9ca3af] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
        <Margin28 />
        <Margin29 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-[#1f232e] content-stretch flex flex-col items-start max-w-[315.8999938964844px] p-[13px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[2px] rounded-tr-[16px] shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] rounded-tl-[2px] rounded-tr-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container69 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Margin27 />
      <BackgroundBorderShadow4 />
    </div>
  );
}

function Margin26() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container68 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[11.52px]">
        <p className="leading-[16px] whitespace-pre-wrap">AI</p>
      </div>
    </div>
  );
}

function Margin31() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[8px] relative shrink-0 w-[40px]" data-name="Margin">
      <Background5 />
    </div>
  );
}

function ParagraphBackgroundBorderShadow() {
  return (
    <div className="bg-[#1f232e] content-stretch flex flex-col gap-[7.5px] items-start max-w-[315.8999938964844px] pl-[17px] pr-[18.75px] py-[17px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[2px] rounded-tr-[16px] shrink-0" data-name="Paragraph+Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] rounded-tl-[2px] rounded-tr-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[14px] w-[79.97px]">
        <p className="leading-[20px] whitespace-pre-wrap">Hello Sarah,</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[80px] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[14px] w-[275.25px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`I see you're asking about your`}</p>
        <p className="leading-[20px] mb-0">subscription status. According to our</p>
        <p className="mb-0">
          <span className="leading-[20px]">{`records, your current plan is `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic">Pro Plan</span>
          <span className="leading-[20px]">{` and`}</span>
        </p>
        <p>
          <span className="leading-[20px]">{`it is set to renew on `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic">Oct 24, 2023</span>
          <span className="leading-[20px]">.</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[14px] w-[229.31px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">You can manage your subscription</p>
        <p>
          <span className="leading-[20px]">{`directly here: `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#3b82f6]">Billing Portal</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#e5e7eb] text-[14px] w-[269.5px] whitespace-pre-wrap">
        <p className="mb-0">Is there anything else I can help you with</p>
        <p>regarding your account?</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex items-start opacity-0 relative shrink-0 w-full" data-name="Container">
      <Margin31 />
      <ParagraphBackgroundBorderShadow />
    </div>
  );
}

function Margin30() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container70 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#12141c] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Container65 />
          <Margin25 />
          <Margin26 />
          <Margin30 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Preview mode only...</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#232732] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[15px] pt-[14px] px-[17px] relative w-full">
          <Container72 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[15.75px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 13.5">
        <g id="Container">
          <path d={svgPaths.pcf80780} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center p-[4px] right-[8px] top-[8px]" data-name="Button">
      <Container73 />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Input2 />
        <Button13 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#1a1d26] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[17px] px-[16px] relative w-full">
        <Container71 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white uppercase w-[75.61px]">
        <p className="leading-[20px] whitespace-pre-wrap">Next Step</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.32px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 4.32031 7">
        <g id="Container">
          <path d={svgPaths.p34116f80} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin32() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container76 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center w-[85.06px]">
        <p className="leading-[16px] whitespace-pre-wrap">{`TONE & STYLE`}</p>
      </div>
      <Margin32 />
    </div>
  );
}

function Button14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="bg-[#1f232e] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[25px] px-[24px] relative w-full">
        <Button14 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder2() {
  return (
    <div className="bg-[#1a1d26] content-stretch flex flex-col h-full items-start pl-px relative shrink-0 w-[400px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#374151] border-l border-solid inset-0 pointer-events-none" />
      <HorizontalBorder2 />
      <Background3 />
      <BackgroundHorizontalBorder1 />
      <BackgroundHorizontalBorder2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[1289.59px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <BackgroundVerticalBorder1 />
        <Background2 />
        <BackgroundVerticalBorder2 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#1a1d26] h-full max-w-[1600px] relative rounded-[12px] shrink-0 w-[1600px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder />
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function ResponseTemplatesConfigurationPage() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center pb-[76.21px] pt-[76.2px] px-[32px] relative size-full" data-name="Response Templates Configuration Page">
      <BackgroundBorderShadow />
    </div>
  );
}