# Troubleshooting Guide

> Having trouble with your contribution? This guide covers the most common issues and how to fix them.

---

## Quick Navigation

- [PR Validation Errors](#pr-validation-errors)
- [Git and GitHub Issues](#git-and-github-issues)
- [Card Template Issues](#card-template-issues)
- [Common Mistakes](#common-mistakes)
- [Getting Help](#getting-help)

---

## PR Validation Errors

When you submit a Pull Request, an automated bot checks your card for common issues. If something is wrong, the bot will leave a comment explaining what needs fixing. Here's how to resolve the most common errors:

### "No .card div found in the diff"

**What it means:** The bot couldn't find your contributor card in the changes.

**How to fix it:**
1. Make sure you created a file in the `cards/` folder named `your-github-username.html`
2. Copy the content from `cards/template.html` into your new file
3. The file must contain a `<div class="card">` element

### "Expected exactly 1 .card div in the diff, found X"

**What it means:** Your file contains multiple card divs instead of just one.

**How to fix it:**
1. Open your `cards/your-github-username.html` file
2. Make sure there's only one `<div class="card">...</div>` in the file
3. Delete any duplicate card divs

### ".name is empty"

**What it means:** The name field in your card is blank.

**How to fix it:**
1. Find the line with `<p class="name">Your name</p>`
2. Replace `Your name` with your actual name
3. Don't remove or change `class="name"` — only change the text content

### ".name still contains the template placeholder"

**What it means:** You didn't replace the placeholder text with your real name.

**How to fix it:**
- Change `<p class="name">your name</p>` to `<p class="name">Your Actual Name</p>`

### ".about is empty or still contains the template placeholder"

**What it means:** The about section is empty or still has placeholder text.

**How to fix it:**
1. Find `<p class="about">Write a sentence or two about yourself.</p>`
2. Replace the text with a brief description about yourself
3. Example: `<p class="about">Frontend developer learning React. Coffee enthusiast.</p>`

### ".contact has no links"

**What it means:** Your contact section doesn't have any links.

**How to fix it:**
1. Add at least one link inside the `.contact` paragraph
2. Example:
   ```html
   <p class="contact">
     <i class="fab fa-github"></i>
     <a href="https://github.com/your-username" target="_blank">Your Username</a>
   </p>
   ```

### ".contact link still uses the template href"

**What it means:** You didn't update the GitHub link with your actual username.

**How to fix it:**
- Change `href="https://www.github.com/your_user_handle"` to `href="https://github.com/your-actual-username"`

### "Card contains a <script>, <iframe>, or <object> element"

**What it means:** Your card contains potentially dangerous HTML elements that aren't allowed.

**How to fix it:**
- Remove any `<script>`, `<iframe>`, or `<object>` tags from your card
- These elements are blocked for security reasons

### "Card contains an inline event handler attribute"

**What it means:** Your HTML includes JavaScript event handlers like `onclick` or `onmouseover`.

**How to fix it:**
- Remove attributes like `onclick="..."`, `onmouseover="..."`, etc.
- Only use standard HTML attributes in your card

### "Link href is not allowed — all links must start with https:// or http://"

**What it means:** A link in your card doesn't use a valid URL format.

**How to fix it:**
1. Make sure all `href` values start with `https://` or `http://`
2. Don't use `#` as a placeholder — replace with real URLs
3. Don't use relative URLs like `/page` — use full URLs

### ".resources has X items (maximum is 5)"

**What it means:** You included more than 5 resource links.

**How to fix it:**
- Keep only your top 5 most useful resources
- Remove the extra `<li>...</li>` items from the resources list

### "Resource X has a placeholder or empty href"

**What it means:** One of your resource links still has `#` as the URL.

**How to fix it:**
- Replace `href="#"` with a real URL like `href="https://example.com/resource"`

### ".skills has X items (maximum is 5)"

**What it means:** You included more than 5 skill tags.

**How to fix it:**
- Keep only your top 5 skills
- Remove the extra skill elements

### "PR changes files other than cards/*.html"

**What it means:** Your Pull Request modified files outside the `cards/` folder.

**How to fix it:**
1. If you accidentally modified `index.html` or other files, revert those changes
2. Your PR should only change your card file: `cards/your-github-username.html`
3. If you intended to make other changes (bug fixes, features), please open a separate PR

---

## Git and GitHub Issues

### "I can't push to the original repository"

**Explanation:** You don't have write access to the original repository. This is normal!

**Solution:**
1. Fork the repository first (click the "Fork" button on GitHub)
2. Clone YOUR fork, not the original: `git clone https://github.com/YOUR-USERNAME/Contribute-To-This-Project.git`
3. Push to your fork, then create a Pull Request

### "My PR shows 'This branch is out of date with the base branch'"

**What it means:** The original repository has new commits that your fork doesn't have.

**How to fix it:**
1. In GitHub Desktop: Repository → Fetch origin, then Branch → Merge into current branch → origin/master
2. In terminal:
   ```bash
   git remote add upstream https://github.com/Syknapse/Contribute-To-This-Project.git
   git fetch upstream
   git merge upstream/master
   git push
   ```

### "Git says 'fatal: not a git repository'"

**What it means:** You're not in a Git repository folder.

**How to fix it:**
1. Navigate to the correct folder: `cd Contribute-To-This-Project`
2. Make sure you cloned the repository successfully

### "Git says 'fatal: remote origin already exists'"

**What it means:** You already added a remote named "origin".

**Solution:**
- Check your remotes: `git remote -v`
- If wrong, update it: `git remote set-url origin https://github.com/YOUR-USERNAME/Contribute-To-This-Project.git`

### "My commits aren't showing up on GitHub"

**What it means:** You committed but didn't push.

**Solution:**
1. In GitHub Desktop: Click "Push origin"
2. In terminal: `git push origin your-branch-name`

### "I committed to the wrong branch"

**How to fix it:**
1. If you haven't pushed yet:
   ```bash
   git checkout your-correct-branch
   git cherry-pick <commit-hash>
   ```
2. If you already pushed, create a new branch from the correct one and cherry-pick

### "I accidentally committed to master/main instead of a new branch"

**How to fix it:**
1. Create a new branch from your current position:
   ```bash
   git checkout -b your-card-branch
   ```
2. Switch back to master and reset it:
   ```bash
   git checkout master
   git reset --hard origin/master
   ```
3. Switch back to your new branch and continue:
   ```bash
   git checkout your-card-branch
   ```

---

## Card Template Issues

### "I can't find the template file"

**Location:** The template is at `cards/template.html`

**If using GitHub website:**
1. Navigate to the `cards/` folder
2. Click on `template.html`
3. Copy the raw content

**If using GitHub Desktop/terminal:**
- The file is in your cloned repository at `cards/template.html`

### "My card isn't showing up on the website"

**Possible reasons:**
1. **PR not merged yet** — Wait for the bot to validate and merge
2. **PR has issues** — Check if the bot left comments asking for fixes
3. **Recently merged** — It may take a few minutes for the site to update

**How to check:**
1. Go to your PR on GitHub
2. Look for a green checkmark ✓ or a red X
3. Read any comments from the bot

### "My card was removed from the cards/ folder"

**Don't worry!** After your card is merged, it's automatically archived:
- Your card data is preserved in the `archive/` folder
- Your card still appears on the website
- This is normal behavior to keep the repository lightweight

Read more in [archive/README.md](archive/README.md).

---

## Common Mistakes

### ❌ Renaming the template file instead of copying it

**Problem:** You edited `template.html` directly instead of creating a copy.

**Fix:**
1. Create a new file: `cards/your-github-username.html`
2. Copy content from `template.html` into your new file
3. Don't modify `template.html`

### ❌ Editing `index.html` directly

**Problem:** The old tutorial mentioned editing `index.html`, but the new flow uses separate card files.

**Fix:**
- Create `cards/your-github-username.html` instead
- Don't modify `index.html`

### ❌ Using special characters in the filename

**Problem:** Using spaces or special characters in your card filename.

**Fix:**
- Use only letters, numbers, hyphens (-), and underscores (_)
- Example: `john-doe.html` or `jane_doe123.html`

### ❌ Changing HTML class names

**Problem:** You modified `class="name"` to `class="my-name"` or similar.

**Why it matters:** The bot validates cards by looking for specific class names.

**Fix:** Only change the text content, never the class attributes:
```html
<!-- WRONG -->
<p class="my-name">John Doe</p>

<!-- CORRECT -->
<p class="name">John Doe</p>
```

### ❌ Forgetting to save the file

**Problem:** You made changes but didn't save before committing.

**Fix:**
- Save the file (Ctrl+S / Cmd+S) before committing
- In your editor, check if there's a dot next to the filename indicating unsaved changes

---

## Getting Help

Still stuck? Here are your options:

### 1. Check the Documentation

- [README.md](README.md) — Full step-by-step tutorial
- [CONTRIBUTING.md](CONTRIBUTING.md) — Quick contribution guide
- [terminal_tutorial.md](terminal_tutorial.md) — Command-line version of the tutorial

### 2. Search Existing Issues

Browse [GitHub Issues](https://github.com/Syknapse/Contribute-To-This-Project/issues) — someone may have had the same problem.

### 3. Ask in Discussions

Visit [GitHub Discussions](https://github.com/Syknapse/Contribute-To-This-Project/discussions) to:
- Introduce yourself
- Ask questions
- Connect with other contributors

### 4. Join Discord

Get real-time help in our [Discord server](https://discord.gg/tWkvS4ueVF).

### 5. Open an Issue

If you found a bug or have a suggestion:
1. Go to [Issues](https://github.com/Syknapse/Contribute-To-This-Project/issues)
2. Click "New Issue"
3. Describe your problem clearly with:
   - What you were trying to do
   - What happened instead
   - Any error messages you saw
   - Screenshots if helpful

---

## Quick Reference: Valid Card Structure

```html
<div class="card">
  <p class="name">Your Actual Name</p>
  <p class="contact">
    <i class="fab fa-github"></i>
    <a href="https://github.com/your-username" target="_blank">your-username</a>
  </p>
  <p class="about">A brief sentence about yourself.</p>
  <div class="resources">
    <p>3 Useful Dev Resources</p>
    <ul>
      <li>
        <a href="https://real-url.com/resource1" target="_blank" title="Description">Resource 1</a>
      </li>
      <li>
        <a href="https://real-url.com/resource2" target="_blank" title="Description">Resource 2</a>
      </li>
      <li>
        <a href="https://real-url.com/resource3" target="_blank" title="Description">Resource 3</a>
      </li>
    </ul>
  </div>
</div>
```

**Remember:**
- ✅ Only change text content and `href` values
- ✅ Keep all class names exactly as they are
- ✅ Use real URLs starting with `https://` or `http://`
- ❌ Don't add `<script>`, `<iframe>`, or inline event handlers
- ❌ Don't modify `index.html` — only create your card file in `cards/`

---

Happy contributing! 🎉