---
title: 'When to use tRPC vs GraphQL'
excerpt: 'tRPC is a lightweight alternative to GraphQL. A quick pointform overview, pros and cons of each and suggested use cases.'
coverImage: '/assets/blog/trpc-vs-graphql/cover.jpg'
date: '2023-01-09T13:35:07.322Z'
author:
  name: Justin Cook
  picture: '/assets/blog/authors/jc.jpg'
ogImage:
  url: '/assets/blog/trpc-vs-graphql/cover.jpg'
---

tRPC is a lightweight alternative to GraphQL. This article is a quick pointform overview, offering pros and cons of each and suggested use cases.

## GraphQL
GraphQL is a querying language that allows you to create schemas that describe all the data the client can request, using a recursive structure.
![GraphQL API](/assets/blog/trpc-vs-graphql/graphql.png "GraphQL API")


### Pros
1. Define types without requiring TypeScript
2. Scalable: rules defined in one schema, can be improved on gradually
3. Efficient: fetch just data required, not entire endpoint payload

### Cons
1. Can be challenging to build schemas that work well if not expert
2. Version management can get messy if running old application version
3. n + 1 problem can be a expensive performance cost. [What is it and potential solutions](https://techdozo.dev/spring-for-graphql-how-to-solve-the-n1-problem/). 

### Use Cases
1. You want to separate your backend and frontend (or work from two repos)
2. You're scaling your backend and need clear rules for your API
3. The application has increasingly more complex and intricate requirements
4. Typescript isn’t an option

## tRPC
tRPC stands for TypeScript Remote Procedure Call - a lightweight library for remotely calling backend functions on client side
![tRPC](https://assets.trpc.io/www/v10/v10-dark-landscape.mp4 "tRPC")

1. Requires TypeScript on both your backend and frontend
2. Frontend uses composable procedures to remotely call backend data
3. Queries to fetch
4. Mutations to create, update and delete
5. Quickly build working APIs without any schemas

## Use Cases
1. You want to bring the backend and frontend closer together
2. You don't have complex needs
3. Your app needs to be more lightweight
4. Using Next.js - tRPC helps connect Next's back and frontend

* Cover image by [by Alex Azabache on Unsplash](https://unsplash.com/photos/UeX_qw9lnzc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)