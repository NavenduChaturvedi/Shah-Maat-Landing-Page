import type { ReactNode } from "react";

type SectionHeadingProps = { eyebrow: string; title: ReactNode; copy?: string; align?: "left" | "center"; tone?: "light" | "dark" };

export function SectionHeading({ eyebrow, title, copy, align = "left", tone = "light" }: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-ink" : "text-ivory";
  const copyClass = tone === "dark" ? "text-ink/65" : "text-ivory/65";
  return <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className={`mt-3 font-display text-4xl leading-none sm:text-6xl ${titleClass}`}>{title}</h2>
    {copy ? <p className={`mt-5 text-base leading-7 sm:text-lg ${copyClass}`}>{copy}</p> : null}
  </div>;
}
