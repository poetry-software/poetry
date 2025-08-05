# Basic Requirements

I've cut a bunch of technical stuff out here for simplicity's sake and punted it to [technical stuff](technical.md)

That being said, the requirements for building your intake platform are pretty straightforward:

- HIPAA compliance. This primarily comes down to two things:
  1.  Storing data in a compliant way, which can primarily be handled by using a HIPAA-compliant database - I can suggest several, and
  2.  Controlling access to protected data in a compliant way. This is application-level, which means it's down to "doing it right" on the engineering part. There are several audit tools you can use to ensure that the code's compliant.
- The intake platform - this is what gets shown to your users and guides them through the process based on the rules you set. For an MVP, I'd recommend doing this purely on the web as opposed to a full-on mobile or tablet app, but these days it's relatively straightforward to build for both. I put some underlying tech recommendations in the [technical stuff](technical.md)
- [The Rules Engine](rules.md) - this is the core logic that's essentially your brain and approach to intake applications downloaded into an algorithm (or set of algorithms). This is the fun part.

And that's pretty much it! As long as your web application's HIPAA compliant, until you hit truly massive scale (we're talking millions of people using your platform) this would get you from simple single-clinic MVP all the way up through white-labeling this product out to a significant number of clinics (in the thousands) without much fuss.

Feel free to dig into the [technical stuff](technical.md) if you'd like, but I've included some thoughts about the [Rules Engine](rules.md) as well.
