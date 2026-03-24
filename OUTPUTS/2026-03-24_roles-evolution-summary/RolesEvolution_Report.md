# How I See Our Roles Evolving

*Thoughts on the future of the Engineering Manager and Engineer roles at Tourlane*

*Aliaksei Kliuchnikau — March 2026*

---

I've been thinking about how AI is changing the way we work — not in theory, but practically, on our teams, at Tourlane. What follows is not a strategy document or a proposal. It's me thinking out loud about what I'm observing, where I believe things are heading, and what I think we should be paying attention to. I'd love for this to start a conversation.

## The Engineer Role: From Task Takers to Area Owners

The biggest shift I see is not about tools or technology — it's about posture. Today, much of engineering work still follows a pattern: someone defines a task, an engineer picks it up, implements it, and moves on. AI accelerates this pattern, but I think the real opportunity is to change the pattern entirely.

I want to see our engineers move from *"give me a task"* to *"I own this area — here are my thoughts, findings, and plans for developing it, let's align."* That's a fundamental shift in how people relate to their work. It means engineers take on product thinking: understanding why something matters, questioning whether it's the right thing to build, and running their own experiments — not just executing someone else's specification.

AI makes this possible because the mechanical cost of building drops dramatically. When prototyping something takes an afternoon instead of a sprint, an engineer can explore an idea, validate it, and present results — rather than waiting for a product manager to write a ticket. But it also makes it necessary, because AI-generated code needs critical, domain-aware reviewers. Catching a subtle pricing bug in AI-written code is harder than writing the code yourself. Our engineers need deep understanding of Tourlane's travel domain — how booking works, how pricing rules interact, what breaks in edge cases — because AI doesn't know our business.

I also see the future engineer as more of a **full-stack generalist** than a narrow specialist. The distinction between "backend engineer" and "frontend engineer" loses meaning when AI tools let one person move across the stack. What matters more is the ability to own a feature end-to-end: from understanding the user need, to designing the solution, to shipping and verifying it. I imagine our teams segmenting into small sub-teams of one or two "one-person crews" who each own a part of the system, while still collaborating closely with other sub-teams within a larger group formed around interdependent areas.

## The EM Role: Enabler, People Leader, Transformer

My focus as an EM is already on people — enabling them, removing impediments, helping them grow. My teams are senior and self-organising; I don't manage tasks or run execution. That doesn't change. What changes is what "enabling" looks like in the context of AI transformation.

The most important thing I can do right now is help transform how we work, not just automate today's processes. There's a real risk that we take our existing workflows and bolt AI onto them — making the old way slightly faster without rethinking whether the old way is right. I believe we need to build **new processes designed for the new reality**, not just accelerate the old ones.

A concrete example: I want to experiment with the "one-person crew" model by giving Wieland full ownership of Destinations — an area that currently falls between the cracks on both the Product and Engineering sides. If he takes end-to-end ownership, handling both the product thinking and the engineering execution with AI as his force multiplier, it could be a proof of concept for how work gets done in the future. Small, autonomous, deeply accountable.

Another area I think requires serious attention is **knowledge management**. As we lean more on AI agents, the quality of their output depends directly on the quality of the knowledge they can access. Our company knowledge needs to be well-organised, maintained, and — critically — structured so that LLM agents can consume it effectively. This is a bigger shift than it sounds: it means rethinking how we document decisions, how we share context, and how we keep information current. It's not just a tooling problem; it's an organisational habit that needs deliberate investment.

### A Note on Meetings

I've seen predictions that meetings will dramatically decrease with AI and smaller teams. I'm not sure I agree, at least not in a straightforward way. Within a team, yes — ceremonies may shrink or simplify. But if engineers take on more product responsibility and make more decisions in their areas, they need to participate in more coordination *outside* their team. Previously, engineers worked independently for a two-week sprint with rare meetings, and managers handled the cross-team alignment. If engineers are now bringing their own product perspective, they need to be in more of those conversations. The overall meeting load may stay similar — it just shifts in nature from internal rituals to external coordination.

## What Worries Me

Two things keep me up at night.

**Quality and trust.** Travel is a domain where errors have direct business and customer consequences. A pricing bug, a booking edge case, a broken itinerary — these aren't abstract quality concerns, they're revenue and reputation. As we rely more on AI-generated code, we need to be honest about the fact that reviewing AI output is hard. The code can look correct, pass tests, and still be subtly wrong. We need strong verification practices, and we need to resist the temptation to prioritise speed over correctness.

**Strategy vs. randomness.** My bigger worry is that we adopt AI tools randomly, without a coherent strategy. Everyone uses different tools in different ways, there's no shared understanding of what good AI-augmented work looks like, and we end up with a patchwork instead of a transformation. I think we need an intentional, company-wide approach to how AI changes our processes, our roles, and our expectations — not just individual teams experimenting in isolation.

## What I Think We Need

If we want to make this transformation real, a few things would help:

- **Space to experiment.** Let teams like mine try new models — the Wieland/Destinations experiment, the one-person crew sub-teams — and learn from them before we standardise anything. Transformation needs room for safe failure.
- **Investment in knowledge management.** Making our documentation and knowledge bases LLM-ready is foundational. Without it, every AI tool we adopt will underperform. This needs focus and resources, not just goodwill.
- **A company-wide AI strategy.** Not a rigid plan, but a shared direction: which tools do we adopt, how do we integrate them, what guardrails do we set, how do we measure success. Someone needs to own this conversation.
- **Support for evolving roles.** If we want engineers to think like product owners and EMs to lead broader transformation, we need to update expectations, career frameworks, and how we evaluate performance accordingly. The old definitions of these roles won't serve us.

---

I don't have all the answers. My teams are actively experimenting with these ideas, and I'm learning as we go. But I'm convinced that the changes ahead are significant enough that we should be talking about them deliberately, not just letting them happen to us. I'd welcome your thoughts.
