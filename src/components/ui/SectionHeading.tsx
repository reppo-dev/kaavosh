import { Reveal } from "@/components/motion/Reveal";

/**
 * SECTION HEADING — eyebrow pill + big title (last word gradient) + subtitle.
 * The base heading for every page section. Consumed by: landing + pages.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}) {
  const words = title.trim().split(" ");
  const last = words.pop();
  const head = words.join(" ");

  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-start"
      }`}
    >
      <Reveal>
        <span className="inline-block rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-wide text-white/70 ring-1 ring-white/10">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.25] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {head}{" "}
          {last && <span className="text-gradient">{last}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
