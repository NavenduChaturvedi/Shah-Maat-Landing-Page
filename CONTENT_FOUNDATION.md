# Shah-Maat Content Foundation

**Purpose:** a content source of truth for the future Shah-Maat website. This is not page design, final copy, or a claim that every placeholder is currently true.

**Updated:** 27 October 2026

## Evidence labels

- **Verified:** present in an inspected source.
- **User-confirmed:** directly confirmed for this project.
- **Historical:** published previously; do not present as current without confirmation.
- **Placeholder:** deliberately empty content to be supplied or approved.

## Core identity

**Verified:** Shah-Maat is the chess society / official chess club of the IIT Madras BS programmes. Its documented purpose is to offer chess enthusiasts a place to play, train, and compete.

**Verified:** The historical activities description includes regular tournaments, puzzle-solving sessions, and interactive sessions with Grandmasters and International Masters.

**User-confirmed:** Shah-Maat runs weekly arena tournaments.

### Approved factual introduction, pending final editorial approval

> Shah-Maat is the chess society of the IIT Madras BS programmes: a shared space for students to play, train, compete, and be part of a chess community.

## Information blocks for the future site

### Weekly arena

**Purpose:** show an active recurring reason to participate.

**Known:** Weekly arenas take place.

| Field | Value |
|---|---|
| Title | Weekly Shah-Maat Arena |
| Day and time | `[ARENA_DAY_AND_TIME]` |
| Platform | `[ARENA_PLATFORM]` |
| Time control | `[ARENA_TIME_CONTROL]` |
| Eligibility | `[ARENA_ELIGIBILITY]` |
| Joining or registration link | `[ARENA_LINK]` |
| Latest result / winner | `[LATEST_ARENA_RESULT]` |

### Membership

**Verified in supplied `index.html`, but must be reconfirmed before launch:** the membership form is described as mandatory for all members, including existing members, using a Student ID. The document says it was released on 24 October 2026 and that previous records cease to count from 1 November 2026.

| Field | Value |
|---|---|
| Membership status | `[MEMBERSHIP_REQUIREMENT]` |
| Membership form link | `https://forms.gle/a5uhjGXEtTM9YvqB7` *(verify)* |
| Student ID requirement | `[STUDENT_ID_REQUIREMENT]` |
| Effective / deadline date | `[MEMBERSHIP_POLICY_DATE]` |
| What membership unlocks | `[MEMBERSHIP_BENEFITS]` |

### Community destinations

**Verified in supplied `index.html`; links still need launch-time checking.**

| Destination | Published URL | Published purpose |
|---|---|---|
| Discord | `https://discord.gg/GXgh2dzmfx` | Daily puzzles, casual sessions, and mentorship |
| Chess.com Club | `https://www.chess.com/club/iitm-bs-club` | Online events and arenas |
| WhatsApp Community | `https://chat.whatsapp.com/LHNQ6h1J7aaK4c0EfDxxuG` | Updates and community connection |
| Instagram | `https://www.instagram.com/shah.maat.iitm.bs` | Announcements and society highlights |
| YouTube | `https://www.youtube.com/@ChessClubIITMBSShahMaat` | Streams, events, and society content |
| Linktree | `https://linktr.ee/shah.maat` | Central links |

**Historical implementation note:** the supplied file asks users to confirm membership before it redirects them to Discord, Chess.com, or WhatsApp, then starts a five-second countdown. Preserve the policy only if it remains official; the specific popup/countdown is not a content requirement.

### Events

**Historical records found:** Margazhi 2023, Paradox 2022, Saavan 2022, dated events during 2023, Chess Mania (1 January 2025), Sunday Night Chess Arena (8 December 2024), and Chess Super League (22 September 2024).

The newer homepage duplicates its listed event cards. Treat the unique events above as historical leads, not polished archive records.

| Field | Upcoming event placeholder |
|---|---|
| Event name | `[UPCOMING_EVENT_NAME]` |
| Date and time | `[UPCOMING_EVENT_DATE_TIME]` |
| Format | `[UPCOMING_EVENT_FORMAT]` |
| Eligibility | `[UPCOMING_EVENT_ELIGIBILITY]` |
| Registration link | `[UPCOMING_EVENT_REGISTRATION_LINK]` |
| Result / winner | `[EVENT_RESULT_OR_WINNER]` |

### Team and governance

**Historical:** an executive council for July 2024–June 2025 is published on the older site. A separate July 2025–June 2026 council is described in the project brief. Neither is a substitute for the current council.

| Field | Value |
|---|---|
| Current council period | `[CURRENT_COUNCIL_PERIOD]` |
| General Secretary | `[GENERAL_SECRETARY]` |
| Deputy Secretary | `[DEPUTY_SECRETARY]` |
| Council roster / roles | `[CURRENT_COUNCIL_ROSTER]` |
| Official contact email | `chess.club@study.iitm.ac.in` *(verify)* |
| Constitution URL | `[CURRENT_CONSTITUTION_URL]` |
| Community guidelines URL | `https://docs.google.com/document/d/1aviZeJk2WVuRPnf81oEhSBxkRNelq-K80vbwOolaqIc` *(verify)* |

### Archive

**Verified historical resources:**

- Chess Chronicles newsletter archive lists January through September editions.
- The February 2024 edition contains international chess coverage, society tournament reporting, editorial content, and member/player recognition.
- An Annual Report for 2023–2024 is listed.
- Older events, councils, and sponsor material exist, but need structured extraction before a public archive is built.

| Archive field | Value |
|---|---|
| Newsletter archive link | `https://shah-maat.netlify.app/newsletter` |
| Annual report link | `https://shah-maat.netlify.app/annual_report` |
| Historical event records | `[EVENT_ARCHIVE_DATA_SOURCE]` |
| Sponsor / collaborator record | `[SPONSOR_HISTORY]` |

## Content hierarchy

1. Identity: what Shah-Maat is and who it is for.
2. Current participation: weekly arena and confirmed upcoming events.
3. Membership and community access.
4. Activities: play, improve, compete, connect.
5. Results and history.
6. Council, contact, guidelines, and constitution.
7. Newsletter and annual-report archive.

## Guardrails

- Do not publish an unverified schedule, winner, statistic, officeholder, sponsor, or deadline.
- Do not say "largest chess community" without an auditable basis.
- Do not present historical councils, events, or policies as current.
- Do not use the new-site counts (events, participants, GM sessions, etc.) until the calculation and period are confirmed.
- Use placeholders in internal work; remove them only after an authorised source supplies the final value.
