# Technical Stuff

This is just some assorted technical detail that's probably useful but can be ignored. I've put thoughts here in no particular order.

## HIPAA Compliance

- For a HIPAA-compliant database, there's a lot of options. [Turso](https://turso.tech) stands out both due to its out-of-the-box HIPAA compliance and the ability to build multi-tenant systems if you white label the product in the future.
- Everything else can be covered with an auditing tool or careful process. It's worth baking good engineering practices around HIPAA compliance into the core system, essentially preventing future engineering work from breaking compliance from the get.

## Web Scale

There are a lot of different ways to structure a web application. I'd recommend just building a single application in something like [Laravel](https://laravel.com) and letting it do everything for you until you really hit super scale. A single web application can handle up to millions of users easily, without needing to engage an engineer to handle super scale and buying into the associated costs and headaches.

Something like Laravel can serve a super fast modern UI that's easy to update, manage talking to the database, and handle any number of other technical details the system would need - queueing, scheduled tasks, building and exporting reports, sending email notifications, et cetera. Alternatives include Ruby on Rails, Django, NextJS, and others. Laravel's the easiest to maintain and hire for out of the bunch.

## Rules Engine

The Rules Engine can live in its own section of the system, enabling the future AI agent interface you'd need as well as enabling you to white-label it separately. I'd prefer to flex this out enough that you can update rules on the fly without needing someone to change it for you and provide some high-powered features if you need a very specific workflow down the line.

This needs a database to store rules configurations, but luckily enough this underlying Rules Engine's database doesn't have to store actual customer data, just hypothetical intake forms, making it much easier to monitor and deploy and exempting it from the main auditing requirements of the rest of the system.
