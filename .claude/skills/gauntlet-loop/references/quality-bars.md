# Choosing the quality bar

The bar is the whole loop. Everything downstream — decomposition, critic verdicts, when to stop — inherits from this one choice. Spend real effort here and offer the user options rather than picking silently.

## What makes a good bar

- **Real and inspectable.** The critic has to be able to actually look at it. A live site, a playable game, a published book, a downloadable report.
- **Slightly out of reach.** If the first round clears it, it taught nothing. Aim where two or three rounds of honest criticism are needed.
- **Same category.** Comparing a browser puzzle game to a AAA shooter produces gaps nobody can act on.
- **Specific.** Not "good design" — *this specific product's* design.

## Domain examples

| Building | Reasonable bars |
|---|---|
| Web app UI | Linear, Stripe Dashboard, Things, Figma |
| Marketing site | Vercel, Notion, Framer, Apple product pages |
| Browser game | Best-in-class itch.io releases, a named console title for feel |
| Novel / long fiction | A named published novel in the exact subgenre |
| Essay / long-form | A named piece from The Atlantic, LRB, or a specific writer |
| Research report | A published sector report from a top consultancy or bank |
| Deck | A well-known S-1 roadshow deck, or a named conference talk deck |
| API / library design | A library people praise for ergonomics in that language |
| Data viz | A specific NYT or FT graphics piece |

## When no reference exists

This is the documented weak point of the pattern. Given a genuinely novel goal, an unconstrained critic invents its own standard, drifts, and burns tokens without converging. Don't let the loop start in that state.

Three fallbacks, in order of preference:

**1. Composite bar.** Decompose *first*, then name a different real exemplar for each dimension. A novel productivity tool has no single reference, but its onboarding can be judged against Linear's, its docs against Stripe's, its empty states against Notion's. Each critic gets one concrete artifact for its own piece. This is usually the right answer.

**2. Adjacent-category bar.** Pick the closest real thing and state explicitly which dimensions transfer and which don't. "Judge pacing and dread against *The Shining*; ignore period setting and prose register."

**3. Rubric bar — last resort.** Write an explicit, falsifiable rubric before the run: five to eight dimensions, each with a written description of what a failing, passing, and excellent result looks like. Freeze it. The critic grades against the frozen text, not against its own taste. Weaker than a real artifact, because it can only measure what you thought to write down.

If none of these can be made to work, say so. A gauntlet loop with no bar is just an expensive way to generate drafts.

## Craft, not costume

Matching a bar means matching the *level of execution*. It does not mean reproducing the reference's assets, characters, branding, trademarks, or copyrighted text. Put this constraint in the aim prompt explicitly — builders drift toward imitation when the reference is the only fixed point they've been given.
