---
name: gauntlet-loop
description: Run or write a Gauntlet Loop — an agentic build pattern where a lead agent sets a real-world quality bar, splits the work into independently judgeable pieces, and pairs each piece with a builder sub-agent and a separate blind critic that keeps sending work back until it beats the bar. Use this skill whenever the user says "gauntlet loop", "run the gauntlet", "builder/critic loop", "loop until it beats X", or asks to build something "at the level of" a named real product. Also use it whenever the user wants a long autonomous run that produces genuinely high-quality output rather than a first draft — ambitious games, polished web apps, marketing sites, novels, decks, research reports — or complains that agent output stops at "good enough", looks generic, or grades itself too kindly. Trigger even if the user never says the words "gauntlet" or "loop".
---

# Gauntlet Loop

A Gauntlet Loop is a way to structure a long autonomous agent run so it stops producing "good enough" work. The core insight: **an agent that grades its own output will always pass itself.** So you separate the builder from the judge, and you give the judge a real-world artifact to compare against instead of a vague adjective.

Credit: the pattern and name come from Matt Shumer, who demonstrated it with the "Claude of Duty" build.

## Before anything else: check the environment

This pattern needs an agentic environment with sub-agents, file access, and the ability to actually inspect output (run the code, read the draft, screenshot the page). Claude Code and Cowork qualify. A plain chat window does not.

- **Sub-agents available** → run the loop (Mode B below).
- **No sub-agents** → don't fake it. Either write the user a paste-ready prompt for their agentic environment (Mode A), or offer a degraded single-context version and say plainly that it's weaker because the same context is doing both building and judging.

Say which mode you're in. Don't let the user think a loop is running when it isn't.

## Mode A — Write the aim prompt

The user wants a prompt they'll paste into Claude Code or similar.

1. Interview briefly. You need: **what they're building**, **what "great" looks like as a named real thing**, and **any hard constraints** (language, framework, length, platform, budget).
2. If they can't name a reference, read `references/quality-bars.md` — there's a fallback for novel work.
3. Offer two or three candidate quality bars and let them pick. This is the single highest-leverage decision in the whole run, so don't choose it silently for them.
4. Hand back one short prompt, formatted per `references/prompt-template.md`, plus a one-line note on how to run it (fresh session, sub-agents on, expect hours, they stop it).

Keep the prompt short. Long prompts over-specify architecture and strangle the agent's search space. Set the aim and the judging rule; leave the how alone.

## Mode B — Run the loop

You are the lead agent. Your job is orchestration and bookkeeping, not building. Resist the pull to start writing the artifact yourself.

### 1. Set the bar

Get a concrete reference artifact — a shipped game, a live site, a published book, a real deck. "Professional quality" is not a bar; *Linear's marketing site* is a bar. Write the bar down in a workbench file so every critic sees the same one.

Pick something you cannot quite reach. A bar you clear on round one taught you nothing.

### 2. Decompose

Split the goal into the **smallest pieces that can be built and judged independently**. Good pieces have an inspectable output and a critic can form an opinion without loading the whole project.

- Good: "movement feel", "enemy AI reaction time", "chapter 3 pacing", "pricing page above the fold"
- Bad: "the frontend", "polish", "make it fun"

Don't fix the decomposition upfront forever. Re-split as you learn.

### 3. Fan out builder + critic pairs

For each piece:

- **Builder sub-agent** — gets the piece, the constraints, and the latest critic feedback. Builds. Does not judge.
- **Critic sub-agent** — fresh context, no memory of the build, no attachment to it. Inspects the *real* output, compares it against the bar, and returns a verdict.

The fresh context matters more than it sounds. A critic that watched the work happen will grade the effort instead of the artifact.

Full critic protocol and verdict format: `references/critic-protocol.md`.

### 4. Judge blind, and only on the biggest gap

The critic compares candidate against reference — blind A/B where the format allows it (two builds, two drafts, labeled A and B, order shuffled). It returns:

- a verdict: does ours win, or does the reference?
- **one** gap: the single largest remaining difference, described concretely enough to act on
- optional: what to preserve, so the next round doesn't regress something good

One gap per round, not a punch list. Ten simultaneous notes produce a builder that fixes none of them well.

### 5. Loop

Feed the gap back to the builder. Rebuild that piece. Re-judge. Repeat until the critic says ours wins, or the user stops the run.

Maintain a live progress page or workbench file — piece, round number, current verdict, current gap. It's how the user knows whether to keep paying for the run.

### 6. The user is the brake

The loop does not converge on its own; a good critic can always find a gap. Tell the user upfront that stopping is their call, and surface a clear "this is where we are" summary at intervals rather than burning tokens silently for hours.

Stop and escalate on your own when: the same gap survives three rounds (the builder can't fix it, or the critic is asking for something impossible), verdicts start oscillating, or the run is chewing budget for shrinking returns.

## Failure modes worth naming

- **No real reference exists.** The critic invents a standard and grades against its own imagination, which burns tokens and teaches nothing. See `references/quality-bars.md` for building a composite bar from per-dimension exemplars instead.
- **Cloning instead of learning.** The reference is a quality bar, not a spec. Match the *level* of craft, not the trade dress — don't copy protected assets, names, or art. Say so in the prompt.
- **Critic drift.** Over many rounds critics soften. Re-anchor by restating the bar verbatim in every critic invocation.
- **Judging the description instead of the artifact.** The critic must inspect real output — run the build, read the actual prose, look at the rendered page. A critic reading a summary is grading a press release.
- **Unfalsifiable pieces.** If no one can tell whether a piece got better, it's the wrong piece. Re-split it.

## Reference files

- `references/prompt-template.md` — the paste-ready prompt shape, plus filled examples across domains
- `references/critic-protocol.md` — critic instructions, blind A/B mechanics, verdict format
- `references/quality-bars.md` — choosing a bar, domain examples, and the fallback for novel work
