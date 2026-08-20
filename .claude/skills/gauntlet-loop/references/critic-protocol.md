# Critic protocol

The critic is the only thing standing between the run and a confident mediocre artifact. Everything here exists to keep it honest.

## Invocation rules

- **Fresh context every time.** No build history, no rationale, no "here's what we were going for." The critic sees the artifact and the bar, nothing else.
- **Restate the bar verbatim** in every invocation. Critics soften across rounds if the bar is only remembered rather than re-read.
- **Separate agent from the builder.** Same model is fine; same context is not.
- **The critic inspects real output.** Run the build, load the page, read the actual chapter, open the file. Never grade a summary or a diff.

## Blind A/B

Where the format allows it, hand the critic two artifacts labeled A and B — ours and the reference — with the order shuffled and identifying marks stripped. Ask which is better and why. A critic that knows which one is "ours" grades charitably.

Blind works well for: prose passages, page designs, static images, copy, chart layouts.
Blind works poorly for: anything where the reference is obviously a different product (a real console game vs. a browser build). There, drop the blind and ask directly: *does this clear the bar, yes or no?*

## Verdict format

Have critics return exactly this:

```
WINNER: reference | ours | too-close-to-call
GAP: <the single biggest remaining difference, concrete and actionable>
EVIDENCE: <what specifically in the output produced this judgment>
PRESERVE: <what's working and must not regress> (optional)
```

Constraints worth enforcing:

- **One gap.** Not a list. A builder handed ten notes fixes ten things shallowly.
- **Concrete.** "Movement feels floaty — no acceleration curve, instant stop on key release" is actionable. "Needs more polish" is noise.
- **Falsifiable.** Someone should be able to look at the next round and say whether the gap closed.

## Anti-gaming

Critics can be captured. Watch for:

- **Grade inflation over rounds** — ours starts winning suspiciously often. Re-anchor with the verbatim bar, or rotate in a fresh critic.
- **Gap laundering** — the same gap reworded each round to look like progress. Diff the last three gaps for a piece; if they're the same complaint, escalate to the user.
- **Effort credit** — "this is impressive given the constraints" is not a verdict. The artifact is judged as a finished thing, against a finished thing.
- **Metric fixation** — if a piece has a number attached (load time, frame rate, word count), builders will optimize the number and let the quality behind it rot. Keep at least one qualitative dimension on every piece.
