import { ExternalLink } from "lucide-react";

const lichessPuzzleFrame = "https://lichess.org/training/frame?theme=dark&bg=dark";

export function LichessPuzzle() {
  return <section id="practice" className="bg-rust px-5 py-24 text-ink sm:px-8">
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
      <div>
        <p className="eyebrow text-ink/70">Daily practice</p>
        <h2 className="mt-4 font-display text-6xl leading-[.86] sm:text-8xl">SOLVE THE<br /><em>REAL THING.</em></h2>
        <p className="mt-7 max-w-md leading-7 text-ink/70">Practice with the official Lichess daily puzzle, embedded directly in Shah-Maat.</p>
        <a href="https://lichess.org/training" target="_blank" rel="noreferrer" className="button-outline mt-8">Open Lichess training <ExternalLink size={16} /></a>
      </div>
      <div className="bg-ink p-4 text-parchment shadow-[14px_14px_0_rgba(23,23,22,.22)] sm:p-6">
        <iframe
          title="Lichess daily puzzle"
          src={lichessPuzzleFrame}
          className="block aspect-[400/444] w-full border-0"
          allowTransparency
          loading="lazy"
        />
      </div>
    </div>
  </section>;
}
