import { Chess, type Square } from "chess.js";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";

const startFen = "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 4";
const solution = { from: "h5" as Square, to: "f7" as Square };
const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
const pieces: Record<string, string> = { p: "♟", r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", P: "♙", R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔" };

type PuzzleState = "idle" | "wrong" | "solved";

export function ChessPuzzle() {
  const [game, setGame] = useState(() => new Chess(startFen));
  const [selected, setSelected] = useState<Square | null>(null);
  const [status, setStatus] = useState<PuzzleState>("idle");
  const board = game.board();

  function reset() { setGame(new Chess(startFen)); setSelected(null); setStatus("idle"); }
  function choose(square: Square) {
    if (status === "solved") return;
    const piece = game.get(square);
    if (!selected) { if (piece?.color === "w") setSelected(square); return; }
    if (square === selected) { setSelected(null); return; }
    const next = new Chess(game.fen());
    try {
      next.move({ from: selected, to: square, promotion: "q" });
    } catch {
      if (piece?.color === "w") setSelected(square);
      return;
    }
    if (selected === solution.from && square === solution.to) { setGame(next); setStatus("solved"); setSelected(null); return; }
    setStatus("wrong"); setSelected(null);
  }
  return <section id="puzzle" className="overflow-hidden bg-ink px-5 py-24 sm:px-8">
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
      <div><SectionIntro /><div className="mt-8 flex items-center gap-3 text-sm text-gold"><Sparkles size={17} /> White to move · Find checkmate in one</div></div>
      <div className="rounded-[2rem] border border-gold/25 bg-[#11100d] p-3 shadow-[0_30px_100px_rgba(0,0,0,.45)] sm:p-5">
        <div className="grid aspect-square overflow-hidden rounded-xl border border-ivory/10" style={{ gridTemplateColumns: "repeat(8,minmax(0,1fr))" }}>
          {board.flatMap((rank, row) => rank.map((piece, column) => {
            const square = `${files[column]}${ranks[row]}` as Square;
            const dark = (row + column) % 2 === 1;
            const active = selected === square;
            return <button key={square} aria-label={`Square ${square}${piece ? `, ${piece.color === "w" ? "white" : "black"} ${piece.type}` : ""}`} onClick={() => choose(square)} className={`relative grid aspect-square place-items-center text-[clamp(1.4rem,5.5vw,4rem)] transition ${dark ? "bg-[#8f6741]" : "bg-[#e7d6b8]"} ${active ? "ring-4 ring-inset ring-gold" : ""}`}>
              {piece ? <span className={piece.color === "w" ? "text-[#fffaf0] drop-shadow-[0_2px_1px_rgba(0,0,0,.6)]" : "text-[#18130e]"}>{pieces[piece.color === "w" ? piece.type.toUpperCase() : piece.type]}</span> : null}
              {column === 0 ? <small className={`absolute left-1 top-0.5 text-[9px] font-black ${dark ? "text-[#e7d6b8]" : "text-[#8f6741]"}`}>{ranks[row]}</small> : null}
              {row === 7 ? <small className={`absolute bottom-0.5 right-1 text-[9px] font-black ${dark ? "text-[#e7d6b8]" : "text-[#8f6741]"}`}>{files[column]}</small> : null}
            </button>;
          }))}
        </div>
        <AnimatePresence mode="wait"><motion.div key={status} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="mt-4 min-h-8 text-center text-sm text-ivory/70">
          {status === "idle" ? "Choose a white piece, then choose its destination." : null}
          {status === "wrong" ? "Legal move, wrong idea. Look for the queen’s cleanest check." : null}
          {status === "solved" ? "Checkmate. Qxf7# — the king has nowhere useful to run." : null}
        </motion.div></AnimatePresence>
        <button onClick={reset} className="mx-auto mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-gold hover:text-gold-light"><RotateCcw size={14} /> Reset puzzle</button>
      </div>
    </div>
  </section>;
}

function SectionIntro() { return <><p className="eyebrow">Board vision</p><h2 className="mt-3 font-display text-5xl leading-[.9] text-ivory sm:text-7xl">One move.<br /><em className="text-gold">No excuses.</em></h2><p className="mt-6 max-w-md text-lg leading-8 text-ivory/65">A quick, legal-move puzzle for the part of your brain that thinks it saw the tactic. Prove it.</p></>; }
