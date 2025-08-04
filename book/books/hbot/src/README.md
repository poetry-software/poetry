# Context

This document is mainly intended as a primer to capture some thoughts and information that might be useful to you as you're planning and preparing to build the patient intake application.

Before I start, here's the context I'm working from:

- The application, at its heart, is intended to make patient intake easier, faster, and more reproducible
- You've already partially engaged another team to do this, but what was proposed is well beyond the scope of the core MVP you'd actually like to build at this point
- I've left some things out (see [Excluded](#excluded)) to make this more useful for your MVP
- There's a bunch of more technical stuff here, but that's mostly so it's available if you need it but you can ignore it if you don't. I've clearly marked what's ignoreably technical.

## Excluded

What's principally important to the initial organization is actually what's **not** here. There's a couple of categories here: stuff that can be easily added later no matter how you build it, and things that should be considered while building an MVP, but don't actually need to be built yet.

### Excluded, But Can Be Added Later No Matter How You Build It

#### AI

You probably don't need an AI out of the box. I was discussing some options with Cameron, and one strong option if you'd like to implement an AI that patients could interact with to complete their intake form is a model where an AI agent, instead of making changes directly in your system, instead interacts with a core [rules engine](rules/engine.md). This would mean that the AI could be trained to answer specific questions, but the core rules engine could dictate what it could do and what it couldn't do without running the risk of an AI malfunctioning and mishandling someone's protected medical data, approving an intake that it shouldn't, or saying that it could do something that's not in your services.

#### White Labeling

White-labeling any application is a significant step and requires a lot of work, but it's mostly done as a vertical cut across all of an application's systems. This basically means that no matter how you build the app, you're going to have to invest non-zero time in getting it ready to white label. That being said, if you try to build it from the beginning with white-labeling in mind, you can wind up paying an order of magnitude more money and time and wind up risking the project altogether. Unless it's part of your core use case (which this doesn't sound like the case) you can safely avoid it.

### Excluded, But Should Be Considered

#### Integrating With A CRM

This is pretty straightforward - since you plan on integrating with a CRM in the future, you can pretty easily develop an MVP and leave a CRM-shaped hole in the implementation. This is part of the "should be considered" category because it's something that can be made *much* easier later if you plan for it now, but doesn't *have* to be done now.

## On To Some Thoughts!

All of that being said, here's some thoughts on how you might approach building this quickly and in pieces, so you aren't trying to eat the entire bear in one go:

[Core Components](core/components.md)
