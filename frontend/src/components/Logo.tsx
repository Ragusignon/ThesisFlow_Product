import svgPaths from "../imports/svg-a2sbo6lgx0";

function Group28494() {
  return (
    <div className="absolute bottom-[39.98%] left-[25.04%] right-[25.04%] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 34">
        <g id="Group 28494">
          <path d={svgPaths.p27c11e80} fill="var(--fill-0, #00A7A5)" id="Path 12095" />
        </g>
      </svg>
    </div>
  );
}

function Group28495() {
  return (
    <div className="absolute bottom-[39.98%] contents left-[25.04%] right-[25.04%] top-0">
      <Group28494 />
    </div>
  );
}

function Group28496() {
  return (
    <div className="absolute inset-[29.98%_25.04%_39.98%_54.93%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
        <g id="Group 28496">
          <path d={svgPaths.p34c5dac0} fill="var(--fill-0, #00A7A5)" id="Path 12096" />
        </g>
      </svg>
    </div>
  );
}

function Group28497() {
  return (
    <div className="absolute inset-[52.53%_25.04%_39.94%_69.95%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g id="Group 28497">
          <path d={svgPaths.pfcc2c00} fill="var(--fill-0, #00A7A5)" id="Rectangle 1828" />
        </g>
      </svg>
    </div>
  );
}

function Group28498() {
  return (
    <div className="absolute bottom-[39.94%] contents left-[25.04%] right-[25.04%] top-0">
      <Group28495 />
      <Group28496 />
      <Group28497 />
    </div>
  );
}

function Group28499() {
  return (
    <div className="absolute bottom-[39.94%] contents left-[25.04%] right-[25.04%] top-0">
      <Group28498 />
    </div>
  );
}

function Group28500() {
  return (
    <div className="absolute bottom-[39.94%] contents left-[25.04%] right-[25.04%] top-0">
      <Group28499 />
    </div>
  );
}

function Group28501() {
  return (
    <div className="absolute bottom-[-0.01%] left-0 right-0 top-[77.11%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 13">
        <g id="Group 28501">
          <path d={svgPaths.p17271700} fill="var(--fill-0, black)" id="Path 12097" />
          <path d={svgPaths.p753f670} fill="var(--fill-0, black)" id="Path 12098" />
          <path d={svgPaths.pc46d680} fill="var(--fill-0, black)" id="Path 12099" />
          <path d={svgPaths.p9d44380} fill="var(--fill-0, black)" id="Path 12100" />
          <path d={svgPaths.p3befd200} fill="var(--fill-0, black)" id="Path 12101" />
          <path d={svgPaths.p1cb37600} fill="var(--fill-0, black)" id="Path 12102" />
          <path d={svgPaths.p3ad3d380} fill="var(--fill-0, black)" id="Path 12103" />
          <path d={svgPaths.p3446c980} fill="var(--fill-0, black)" id="Path 12104" />
          <path d={svgPaths.p1d9a1b00} fill="var(--fill-0, black)" id="Path 12105" />
          <path d={svgPaths.p209bcec0} fill="var(--fill-0, black)" id="Path 12106" />
        </g>
      </svg>
    </div>
  );
}

function Group28502() {
  return (
    <div className="absolute bottom-[-0.01%] contents left-0 right-0 top-0">
      <Group28500 />
      <Group28501 />
    </div>
  );
}

function LogoInner() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip top-0 w-[85px]" data-name="Logo">
      <Group28502 />
    </div>
  );
}

function BiRCircle() {
  return (
    <div className="absolute bottom-[10.71%] left-[93.48%] right-0 top-[78.57%]" data-name="bi:r-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_1_618)" id="bi:r-circle">
          <path d={svgPaths.p2a03c880} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_618">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Logo() {
  return (
    <div className="relative h-[56px] w-[92px]" data-name="Logo">
      <LogoInner />
      <BiRCircle />
    </div>
  );
}
