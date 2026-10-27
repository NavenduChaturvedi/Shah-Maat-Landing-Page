export type EventRecord = {
  name: string;
  date: string;
  type: string;
  status: "historical" | "placeholder";
  description: string;
};

export const eventRecords: EventRecord[] = [
  { name: "Weekly Shah-Maat Arena", date: "[ARENA_DAY_AND_TIME]", type: "Recurring arena", status: "placeholder", description: "[ARENA_PLATFORM] · [ARENA_TIME_CONTROL] · [ARENA_ELIGIBILITY]" },
];

export const participationPaths = [
  { label: "Play", copy: "Meet fellow players through arenas, casual games, and society events.", icon: "♞" },
  { label: "Improve", copy: "Explore puzzles, learning sessions, and deliberate practice.", icon: "♜" },
  { label: "Compete", copy: "Step into weekly arenas and special tournaments when they are announced.", icon: "♛" },
  { label: "Connect", copy: "Keep up through Shah-Maat’s official community spaces and channels.", icon: "♝" },
];
