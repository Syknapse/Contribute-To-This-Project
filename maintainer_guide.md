# Maintainer's Guide

This guide is for people who would like to join the project as maintainers and help manage and maintain it for the community.  
(This is **not** a guide for first-time contributors.)

## Translations

This tutorial is also available in [other languages](translations/README.md).

> ⚠️ All translations below are currently outdated and describe the v1 workflow.

|                   [English](maintainer_guide.md)                    |   [Bangla](translations/maintainer_guide/maintainer_guide.ben.md)   | [Chinese (Traditional)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [French (française)](translations/maintainer_guide/maintainer_guide.fra.md) | [German](translations/maintainer_guide/maintainer_guide.ger.md) |
| :-----------------------------------------------------------------: | :-----------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :-------------------------------------------------------------: |
|   [Hindi](translations/maintainer_guide/maintainer_guide.hin.md)    | [Indonesian](translations/maintainer_guide/maintainer_guide.ind.md) |          [Italian](translations/maintainer_guide/maintainer_guide.ita.md)          |      [Japanese](translations/maintainer_guide/maintainer_guide.jpn.md)      | [Korean](translations/maintainer_guide/maintainer_guide.kor.md) |
| [Portuguese](translations/maintainer_guide/maintainer_guide.por.md) |  [Russian](translations/maintainer_guide/maintainer_guide.rus.md)   |        [Ukrainian](/translations/maintainer_guide/maintainer_guide.ukr.md)         |

> Translations for project documentation are welcome.  
> Please read the [`Translation Guide`](translations/README.md) to contribute.

---

## Objectives

Our main objective is to provide contributors with quick and helpful feedback from the moment they submit a pull request. This primarily includes reviewing code and merging accepted pull requests.

In addition, maintainers ensure that the project continues to function correctly and remains as helpful and useful as possible for contributors.

## Who is this for?

Anyone with basic knowledge of Git and GitHub. You do not need to be an expert—this guide is designed to help even beginners.

This is an active project that receives regular contributions and helps many people make their first open-source contribution. Being a maintainer helps ensure contributors have a positive first experience and encourages them to continue contributing.

You can commit as much or as little time as you like. Together, we can keep the project running smoothly.

## v2 Workflow

The project now uses a fully automated pipeline for card submissions:

**validate → automerge → archive**

### What maintainers do now:

- Approve `ci.yml` workflows for flagged contributors
- Handle `Remove Card` requests via GitHub Actions
- Monitor the Actions tab for failed archive runs and re-trigger manually if needed

For archive operations, refer to [archive/README.md](archive/README.md).

## Project Philosophy

- **Contributors first** — every decision prioritizes the contributor experience
- **Minimum maintainability** — keep maintenance burden as low as possible
- **Simplicity** — no over-engineering
