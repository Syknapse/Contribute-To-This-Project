# Spec for v2.0 of Contribute-to-this-project

The project currently has major issues that can be divided into three main categories

1. An unmanageable number of current PRs
1. A brittle and time-consuming PR review and merge cycle
1. A host of smaller issues and improvements

## 1. Current PR problem

We need to separate the normal contributor card PRs from the PRs that add other features or fix issues in the project (such as translation PRs).  
Then we need to find a way to safely merge all of the normal contribution PRs ensuring there are no conflicts or corrupt html and that they all successfully show on the projects's [gh page](https://syknapse.github.io/Contribute-To-This-Project/)

## 2. Automation

The main issue in the project is lack of time to handle the influx of PRs. We need to find practical solutions to automate as much of the workflow as possible while simultaneously resolving all the recurrent issues.

Contribution now is a nightmare because all contributors edit the same index.html file leading to constant merge conflicts and changes to part of the code that shouldn't be touched. Often a contributor's formatting settings create large scale changes to the file making PRs difficult to deal with. We need to find a way to solve this problem while maintaining the core value proposition of the project, allowing first-time contributors to write actual code (html) and see it's impact on the projects website.

We need to make the process of receiving a PR, reviewing it, merging it as automated as possible down to zero human time if possible.

One non-negotiable constraint is that the entire solution should cost no money and use only free tiers of any needed services.

## 3. Issues

The project has a number of smaller issues that must be fixed to ensure it is easy to contribute to, easy to onboard maintainers, easy to manage, secure, and requires the least tinkering possible going forward.
