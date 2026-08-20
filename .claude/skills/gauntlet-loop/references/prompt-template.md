# Prompt template

The aim prompt is short on purpose. It fixes the *goal*, the *bar*, and the *judging rule* — and deliberately leaves architecture, decomposition, and round count to the agent. Over-specifying those collapses the search space and you end up with the plan you already had.

## Shape

```
Build [THING] at the level of [REFERENCE]. Target [TIER] quality across
everything — [DIMENSION_1], [DIMENSION_2], and anything else you'd notice
if it were wrong.

Split this into the smallest pieces that can be built and judged on their
own. For each piece, fan out a builder sub-agent and a separate critic
sub-agent with fresh context. The critic inspects the real output, compares
it against [REFERENCE] — blind A/B where possible — names the single biggest
remaining gap, and sends it back. Builders never grade their own work.

Keep looping until our output wins or I stop the run. Maintain a live
progress file showing each piece, its round, and its current verdict.
Don't prescribe a fixed number of rounds. Match the level of craft, not
the assets or branding.
```

## Filled examples

**Game**
> Build a browser-based first-person shooter at the level of a modern AAA console shooter. Target shipped-retail quality across everything — weapon feel, hit reaction, level readability, audio, framerate. Original assets and world only. [+ loop paragraph]

**Marketing site**
> Build the marketing site for a developer tools startup at the level of Linear's. Target quality across everything — typographic rhythm, motion timing, copy density, mobile behavior, load speed. Our product and voice, not theirs. [+ loop paragraph]

**Long-form writing**
> Draft an original horror novel at the level of *The Shining*. Target quality across everything — dread accumulation, interiority, dialogue, chapter pacing, ending. Original story and characters. [+ loop paragraph]

**Research report**
> Produce a market analysis at the level of a top-tier consultancy's published sector reports. Target quality across everything — evidence density, source quality, chart clarity, structural logic, executive summary sharpness. [+ loop paragraph]

## Notes to pass along with the prompt

- Run it in a fresh session in an agentic environment, sub-agents enabled.
- Expect hours, not minutes.
- The run doesn't end on its own — the user stops it when they like what they see.
- Check the progress file periodically rather than watching output scroll.
