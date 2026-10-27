import { ArrowUpRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { eventRecords } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function Events() {
  const event = eventRecords[0];
  return <section id="events" className="bg-parchment px-5 py-24 text-ink sm:px-8"><div className="mx-auto max-w-6xl"><SectionHeading tone="dark" eyebrow="The playing calendar" title={<>One recurring <em>arena.</em></>} copy="A weekly reason to sharpen up, compete, and meet the Shah-Maat community. Official timing and participation details will be added when confirmed." /><motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} className="mt-12 overflow-hidden rounded-2xl border border-ink/15 bg-[#f3e8d7] p-7 shadow-[12px_12px_0_rgba(23,23,22,.08)] sm:p-10"><div className="flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.14em] text-ink/55"><span>{event.type}</span><CalendarDays size={16} /></div><h3 className="mt-8 font-display text-4xl leading-none sm:text-6xl">{event.name}</h3><p className="mt-4 font-mono text-sm font-bold tracking-wide text-rust">{event.date}</p><p className="mt-5 max-w-2xl text-base leading-7 text-ink/65">{event.description}</p></div><a href="#join" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-ink underline decoration-rust underline-offset-4">See participation details <ArrowUpRight size={16} /></a></div></motion.article></div></section>;
}
