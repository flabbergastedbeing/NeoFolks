import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiPython,
  SiTensorflow,
  SiNodedotjs,
  SiDocker,
  SiGithub,
  SiFigma,
  SiFirebase,
  SiMongodb,
  SiGooglecloud,
  SiGraphql,
  SiVercel,
} from "react-icons/si";
import { SectionHeader } from "@/components/common/SectionHeader";

// Design.md "Integration Logo Grid": native brand colors, no borders/cards.
// Documented deviation #5: pure-black marks (Vercel, GitHub) render in white
// so they stay visible on the black canvas.
const logos: { Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; label: string; color?: string }[] = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: SiVite, label: "Vite", color: "#646CFF" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
  { Icon: SiPython, label: "Python", color: "#3776AB" },
  { Icon: SiTensorflow, label: "TensorFlow", color: "#FF6F00" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { Icon: SiDocker, label: "Docker", color: "#2496ED" },
  { Icon: SiGithub, label: "GitHub", color: "#ffffff" },
  { Icon: SiFigma, label: "Figma", color: "#F24E1E" },
  { Icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { Icon: SiGooglecloud, label: "Google Cloud", color: "#4285F4" },
  { Icon: SiGraphql, label: "GraphQL", color: "#E10098" },
  { Icon: SiVercel, label: "Vercel", color: "#ffffff" },
];

export function LogoGrid() {
  return (
    <section className="section-spacing">
      <div className="container-page flex flex-col gap-48">
        <SectionHeader title="Trusted By & Built With" animateOnScroll={false} />

        <div
          className="grid grid-cols-4 place-items-center gap-16 sm:grid-cols-6 lg:grid-cols-8"
        >
          {logos.map(({ Icon, label, color }) => (
            <Icon key={label} className="h-40 w-40" style={{ color }} aria-label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}