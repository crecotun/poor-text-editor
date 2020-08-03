## Welcome!

We are happy you have decided to take our coding challenge. We really hope you will have fun with it.  Also, regardless of the evaluation outcome, we will give you feedback on your code.

At any time, please don't hesitate to ask any questions.

Happy coding!

## Task

It's common knowledge that the `contentEditable` API is very powerful, but it also has a lot of... let's say, headaches. Besides, implementations in browsers tend to vary.

You have decided to build something better.

You have founded a new startup "LetsEdit" and you have set out to build a better editor experience without the use of the `contentEditable` API.

Your first step is to build a PoC.

## Requirements

- The only formatting the PoC should support is **bold**. You can freely choose what actions trigger creation of the formatting.
- Optionally, the PoC must also support the concept of a paragraph. It's up to you how you choose to interpret this concept.
- It must be possible to correct what has been written before. Copying and pasting is not required.
- It must be possible to change the position of the cursor as well as select a portion of text using a pointer device (mouse, touchpad, etc.)
- The editor must be built so that it will be easy to add a collaborative multi-user experience later. You don't know what technology you will use for the collaboration, but it's clear the architecture needs to be prepared to support multiple cursors and be agnostic to input source (data push or user device input)
- Avoid using view or app frameworks, and stick to vanilla js as much as possible. This doesn't apply to the build pipeline. Also, if you choose to use reactive programming concepts, using a library for that is fine.

## Evaluation Criteria

- The most important part for us is the APIs and technologies you choose and the reasoning why.
- We will not pay attention to browser compatibility, so please skip that.
- When it comes to the UI, we will appreciate some show-off of modern technology and your styling skills, but the design quality of the UI is not part of the evaluation. However, some insight into UX is expected. E.g., it's not important whether you add a shadow to the button or not, but we expect to understand from the UI how it works without a user's manual.
- It's completely OK to skip some parts of implementation and provide skeletons (eg., methods or tests without implementation) or simply descriptions if the boilerplate becomes too large. However, those parts that are implemented should follow best practices.

## Steps

- First, think about a challenge, and before you start coding schedule a [20 minute check-in call](https://meetings.hubspot.com/ernests/20-minute-check-in) with Ernests to go through questions you might have and present your approach to the challenge.
- Also, during the call we will expect you to tell us when you will send in the result. However, faster is not necessarily better. The time you take won't affect the evaluation.
- The challenge itself shouldn't take more than 6 hours in total of your time. As mentioned above, it's not obligatory to provide the result entirely in code.

## Deliverables

- Create a **private** repository on GitHub (they are free). When you finish the challenge, invite `bez4pieci` as a collaborator to the repository you created and send a notification e-mail to [careers@golayer.io](mailto:careers@golayer.io).
- Write your solution in code, and use multiple commits.
- Generally, it should be runnable, so please provide instructions how to do that. If it's not runnable, please provide reasons as to why.
- It is not required but if you like you can attach all documents, mockups, or diagrams which help you develop the code.
- We will appreciate additional information about the problems and potential solutions for future cases
    - when many users work on the same document simultaneously,
    - when the document becomes very large,
    - when you add more formatting options like italics and font properties, or objects like embedded images, tables etc.