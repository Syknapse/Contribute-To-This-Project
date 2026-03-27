# [Contribute To This Project](https://syknapse.github.io/Contribute-To-This-Project/)

![image info](/favicon.png)

> Logo Created with :sparkling_heart: By [CandidDeer](https://github.com/CandidDeer)

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://syknapse.github.io/Contribute-To-This-Project/)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://syknapse.github.io/Contribute-To-This-Project/)

---

> ## **Announcement:**
>
> Would you like to become a maintainer on this project? Read the [maintainer's guide](/maintainer_guide.md), join our [Discord server](https://discord.gg/tWkvS4ueVF), and request to join the team.

---

### Quick access index

- [Introduction](#introduction)
- [Who is this for?](#who-is-this-for)
- [What am I going to contribute?](#what-am-i-going-to-contribute)
- [Translations](#translations)
- [Setup](#setup)
- [Contribute](#contribute)
  - [Step 1: Fork this repository](#step-1-fork-this-repository)
  - [Step 2: Clone the repository](#step-2-clone-the-repository)
  - [Step 3: Create a new branch](#step-3-create-a-new-branch)
  - [Step 4: Copy the template file](#step-4-copy-the-template-file)
  - [Step 5: Fill in your card](#step-5-fill-in-your-card)
  - [Step 6: Check your work](#step-6-check-your-work)
  - [Step 7: Commit your changes](#step-7-commit-your-changes)
  - [Step 8: Push your changes to GitHub](#step-8-push-your-changes-to-github)
  - [Step 9: Submit a PR](#step-9-submit-a-pr-pull-request)
  - [Step 10: Celebrate](#step-10-celebrate)
- [Next Steps](#next-steps)

---

## Introduction

This is the terminal version of the tutorial. Everything here uses Git on the command line. If you prefer a GUI, use [GitHub Desktop instead](/README.md).

### Who is this for?

Anyone comfortable enough with a terminal to run basic Git commands. You don't need to be an expert — if you can navigate directories and run commands, you're good.

### What am I going to contribute?

You'll add a personal card to the [project's web page](https://syknapse.github.io/Contribute-To-This-Project/). It will include your name, contact links, a short description, and links to developer resources you recommend.

---

## Translations

This tutorial is also available in other languages. Note that translations may lag behind the English version.

|      [Bengali](translations/terminal_tutorial/terminal_tutorial.ben.md)       | [German](translations/terminal_tutorial/terminal_tutorial.ger.md) |   [Hindi](translations/terminal_tutorial/terminal_tutorial.hin.md)   |          [Korean](translations/terminal_tutorial/terminal_tutorial.kor.md)          |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | :------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
| [Portuguese (BR)](translations/terminal_tutorial/terminal_tutorial.por-br.md) | [Telugu](translations/terminal_tutorial/terminal_tutorial.tel.md) | [Ukrainian](translations/terminal_tutorial/terminal_tutorial.ukr.md) | [Chinese (Traditional)](translations/terminal_tutorial/terminal_tutorial.zho-tc.md) |

> Translations for this tutorial are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## Setup

Make sure you have Git installed:

```bash
git --version
```

If you don't have it, [download Git here](https://git-scm.com/downloads).

---

## Contribute

Become an open source contributor in 10 steps.

### Step 1: Fork this repository

Fork this project by clicking the **Fork** button at the top right of the [repository page](https://github.com/Syknapse/Contribute-To-This-Project). This creates a copy of the project under your own GitHub account.

[↑ Go to top ↑](#quick-access-index)

---

### Step 2: Clone the repository

Clone your fork to your local machine:

```bash
git clone https://github.com/your-github-username/Contribute-To-This-Project.git
```

Then move into the project directory:

```bash
cd Contribute-To-This-Project
```

[↑ Go to top ↑](#quick-access-index)

---

### Step 3: Create a new branch

Create and switch to a new branch:

```bash
git checkout -b your-name-card
```

Use a descriptive name — `your-name-card` is a good convention for this project.

**Do NOT work on the `master` branch.**

[↑ Go to top ↑](#quick-access-index)

---

### Step 4: Copy the template file

The project has a ready-made card template in the `cards/` folder. Copy it and rename the copy to match your exact GitHub username:

```bash
cp cards/template.html cards/your-github-username.html
```

For example, if your username is `octocat`:

```bash
cp cards/template.html cards/octocat.html
```

**This is the only file you will be editing.** Do not edit `cards/template.html` itself.

[↑ Go to top ↑](#quick-access-index)

---

### Step 5: Fill in your card

Open your new card file in any editor:

```bash
code cards/your-github-username.html   # VS Code
# or: nano, vim, etc.
```

Your card looks like this:

```html
<div class="card">
  <p class="name">Your name</p>
  <p class="contact">
    <!-- Add one or more contact links. At minimum, include your GitHub. -->
    <i class="fab fa-github"></i>
    <a href="https://www.github.com/your_user_handle" target="_blank">Your handle</a>
  </p>
  <p class="about">Write a sentence or two about yourself.</p>
  <div class="resources">
    <p>3 Useful Dev Resources</p>
    <ul>
      <li>
        <a href="#" target="_blank" title="First Resource">Resource 1</a>
      </li>
      <li>
        <a href="#" target="_blank" title="Second Resource">Resource 2</a>
      </li>
      <li>
        <a href="#" target="_blank" title="Third Resource">Resource 3</a>
      </li>
    </ul>
  </div>
</div>
```

Fill it in:

- **Name** — replace `Your name` with your name. Do not change `class="name"`.
- **Contact** — replace the GitHub link and handle with your own. Add more contact links if you like — find icon classes at [Font Awesome Icons](https://fontawesome.com/icons) (e.g. `fab fa-linkedin`, `fab fa-x-twitter`).
- **About** — replace the placeholder with a short description of yourself.
- **Resources** — replace `#` with real URLs, update `title=""` and the link text. These are optional, but if you include them, each needs a real link. Maximum 5.

**Do not change any class names or the HTML structure.** The validation bot checks for these.

Save the file when you're done.

[↑ Go to top ↑](#quick-access-index)

---

### Step 6: Check your work

Open your card file and read through it. Make sure:

- All placeholder text is replaced
- All links start with `https://`
- The filename matches your exact GitHub username

The automated check when you submit will catch anything structural you might have missed.

[↑ Go to top ↑](#quick-access-index)

---

### Step 7: Commit your changes

Stage your card file:

```bash
git add cards/your-github-username.html
```

Commit with a short message:

```bash
git commit -m "Add my card"
```

[↑ Go to top ↑](#quick-access-index)

---

### Step 8: Push your changes to GitHub

Push your branch to your fork:

```bash
git push origin your-name-card
```

[↑ Go to top ↑](#quick-access-index)

---

### Step 9: Submit a PR (Pull Request)

Go to your fork on GitHub. You'll see a prompt to open a pull request for your recently pushed branch — click **Compare & pull request**.

Make sure the base repository is `Syknapse/Contribute-To-This-Project` and the base branch is `master`.

Leave **Allow edits from maintainers** checked, then click **Create pull request**.

A bot will automatically validate your card. If everything looks good it merges it automatically. If something needs fixing, the bot will leave a comment explaining exactly what to change — push the fix to the same branch and it will re-check.

[↑ Go to top ↑](#quick-access-index)

---

### Step 10: Celebrate

You've made your first open source contribution! Your card will be live at [https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project) shortly after merging.

**Where did my HTML file go?** After a while, submitted cards are automatically archived to keep the repository lightweight. Your file is removed from `cards/` but its data is preserved in the archive and your card still appears on the site. [Find out more](archive/README.md).

[↑ Go to top ↑](#quick-access-index)

---

## Next Steps

- You can also learn how to contribute from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)
- If you found this project **useful** please give it a :star: star :star: at the top of the page and **Tweet** about it [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]
- Join our [Discord server](https://discord.gg/tWkvS4ueVF)
- Want to contribute beyond a card? See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.
- **Thanks for contributing!** Now try contributing to other projects — look for the ![Good First Issue](https://user-images.githubusercontent.com/29199184/33852733-e23b7070-debb-11e7-907b-4e7a03aad436.png) label for beginner-friendly options.

---

### Acknowledgements

This project is heavily influenced by [Roshan Jossey's](https://github.com/Roshanjossey) great [first-contributions](https://github.com/Roshanjossey/first-contributions) project.

### Top 100 Contributors

[![GitHub Contributors Image](https://contrib.rocks/image?repo=Syknapse/Contribute-To-This-Project)](https://github.com/Syknapse/Contribute-To-This-Project/graphs/contributors)

[twit]: https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweet this project'
