# Rules Engine

The Rules Engine would be the essential core of the intake platform. This is essentially a downloaded, computer-friendly model of the way you categorize intake forms (the Red, Green, Orange model). I'm calling this out as separate from the rest of the system for two reasons:

1. It's elemental to the way the entire system works - everything else, from the various web interfaces to an AI agent, would clear everything through this core engine when it came to moving intakes through the different states.
2. Making it a separate, core part of your platform enables you to do cool stuff like implement specialized AI agents down the road without giving up your intellectual property or exposing yourself to unneeded security risks. For example, instead of giving your rules directly to OpenAI, you would engage an agent more as a customer-facing element, and the rules engine would instead _dictate_ what it could do and how it could do it.

Some things worth considering:

### Flexibility

How often do you update rules, and how flexible would it need to be? Depending on how often you'd like to experiment with or modify your approach, this can be done differently. For instance, imagine a web interface that you could log into to change if a particular data point on an intake form would weight it more towards Orange than Red.

Something to consider when looking at white-labeling something like this is how flexible the rule system would need to be - would you want individual clinics to override certain rules, or provide them prebuilt sets that they could pick from? One clinic might want a stricter ruleset, for instance.

### Delivery

If you deploy this to a lot of different clinics and contexts, for example when white-labeling this to other clinics as a product, it's worth thinking about how they'll engage with the rules. Would you want to let them override or adjust your rulesets before applying it to their intake process, or create their own rules? Nothing too complicated here, but it's worth thinking about relatively early.

---

I've consolidated some ignoreable (but potentially useful) [technical stuff](technical.md) into a single section.
