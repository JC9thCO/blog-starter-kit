---
title: 'Blitz.js vs. Next.js'
excerpt: 'Blitz.js is a meta-meta-framework that claims to pick up where Next.js leaves off. What are the differences?'
coverImage: '/assets/blog/blitz-vs-next/blitz.jpg'
date: '2023-01-10T11:35:07.322Z'
author:
  name: Justin Cook
  picture: '/assets/blog/authors/jc.jpg'
ogImage:
  url: '/assets/blog/blitz-vs-next/blitz.jpg'
---

Next.js is basically the best thing since sliced bread. All the advantages that React has to offer with reactive, componentized architecture, but then adding on all that's needed for public-facing production websites. But, then again, it's not "everything", right? You still need a data layer, most often you need to implement authentication, and usually you will repeat other steps like bolting on a UI library, etc. 

That's where Blitz comes in - preserving the DX of Next.js, but expediting the build process by baking in the most common app requirements that you'll need to build anyhow.

## Blitz.js Features

These are the current features built into Blitz:

 - Typesafe Data Layer - No need to spend time building a REST or GraphQL API - Blitz automatically an RPC (Remote Procedure Call, not tRPC) API for fetching data to the frontend.
 - Authentication - Again, no need to build session management, something you need in >90% of the sites you'll work on. Blitz initially uses a SQLite database (installed by default), but this can be changed to work with any identity provider.
 - Code Scaffolding - A common time saver is code scaffolding - creating a basic replicable structure for your projects so you can focus your time on writing the actual code. Blitz provides basic opinionated scaffolding. The downside is that this precludes being able to automatically perform library updates.
 - Recipes - You can use MDX commands to quickly scaffold code (e.g. dependencies, CSS libraries) into your application. 
   - Example: ``` blitz install tailwind ```
 -  Pre-configured New Projects - No need to spend time building in the basics (eslint, prettier, husky), as they're baked into a new Blitz app upon install.
 - Route Manifest - With Next.js you are required to manually type out page locations. With Blitz however, you can optionally refer to a page by name instead of location, which makes moving pages simpler.

## Cons of using Blitz
At this point I haven't worked enough with the framework to enumerate any major cons. As our development team works with Blitz, I'll update this article with any serious detractors we come across.

[Cover photo by Christian Lue on Unsplash](https://unsplash.com/photos/Qava0gzXYSo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)]