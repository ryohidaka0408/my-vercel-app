import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiPython,
} from "react-icons/si";

const icons = [
  { icon: SiReact, top: "10%", duration: "30s", size: 40 },
  { icon: SiNextdotjs, top: "20%", duration: "35s", delay: "-5s", size: 32 },
  { icon: SiJavascript, top: "30%", duration: "28s", delay: "-10s", size: 48 },
  { icon: SiTypescript, top: "40%", duration: "32s", size: 36 },
  { icon: SiTailwindcss, top: "50%", duration: "40s", delay: "-2s", size: 52 },
  { icon: SiNodedotjs, top: "60%", duration: "25s", delay: "-15s", size: 30 },
  { icon: SiGit, top: "70%", duration: "38s", size: 44 },
  { icon: SiPython, top: "80%", duration: "29s", delay: "-7s", size: 38 },
  { icon: SiHtml5, top: "90%", duration: "34s", delay: "-3s", size: 34 },
];

const FlowingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {icons.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="absolute animate-flow" style={{ top: item.top, animationDuration: item.duration, animationDelay: item.delay || "0s" }}>
            <Icon size={item.size} className="text-zinc-200/80 dark:text-zinc-800/80" />
          </div>
        );
      })}
    </div>
  );
};

export default FlowingBackground;