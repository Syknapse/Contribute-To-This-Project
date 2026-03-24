'use strict'

/**
 * Card validator — two modes
 *
 * PHASE 1 (backlog, default): lenient.
 *   These PRs were submitted months ago by first-timers who are unlikely to
 *   return and fix small mistakes. We merge anything that has a real name and
 *   a recognisable card structure. The goal is inclusion, not perfection.
 *   Only hard-block on things that signal a genuinely broken submission:
 *     - no card div found in the diff
 *     - more than one card div (pasted the whole file)
 *     - name is empty or still the template placeholder
 *
 * PHASE 2 (new flow, strict): enforced by validate-card-pr.yml at PR time.
 *   Contributors get immediate feedback and can fix before merge. Stricter
 *   rules are fair because the automation is there to guide them in real time.
 */

// Exact placeholder values from the index.html template card
const PLACEHOLDERS = {
  name: 'your name',
}

/**
 * Validate a contributor card.
 *
 * @param {import('cheerio').CheerioAPI} $ - cheerio instance loaded with card HTML
 * @param {object} opts
 * @param {string[]} opts.changedFiles - PR changed files list (for file-scope check)
 * @param {'phase1'|'phase2'} opts.mode - validation strictness (default: 'phase1')
 * @returns {{ valid: true } | { valid: false, errors: string[] }}
 */
function validateCard($, { changedFiles = [], mode = 'phase1' } = {}) {
  const errors = []

  // --- File scope (re-assert; categorisation already checked this) ---
  if (changedFiles.length > 0) {
    const nonIndex = changedFiles.filter(f => f !== 'index.html')
    if (nonIndex.length > 0) {
      errors.push(`PR changes files other than index.html: ${nonIndex.join(', ')}`)
    }
  }

  // --- Card presence (hard block in both modes) ---
  const cards = $('.card')
  if (cards.length === 0) {
    errors.push('No .card div found in the diff')
    return { valid: false, errors }
  }
  if (cards.length > 1) {
    errors.push(
      `Expected exactly 1 .card div in the diff, found ${cards.length} — the PR may have included the whole file`
    )
    return { valid: false, errors }
  }

  const card = cards.first()

  // --- .name (hard block in both modes) ---
  const nameEl = card.find('.name')
  if (nameEl.length === 0) {
    errors.push('Missing .name element')
  } else {
    const name = nameEl.text().trim()
    if (!name) {
      errors.push('.name is empty')
    } else if (name.toLowerCase() === PLACEHOLDERS.name) {
      errors.push(`.name still contains the template placeholder ("${name}")`)
    }
  }

  // Early return for phase1 — if name is fine, we're done
  if (mode === 'phase1') {
    return errors.length === 0 ? { valid: true } : { valid: false, errors }
  }

  // -----------------------------------------------------------------------
  // Phase 2 checks — stricter, applied at PR submission time
  // -----------------------------------------------------------------------

  // --- .about ---
  const aboutEl = card.find('.about')
  if (aboutEl.length === 0) {
    errors.push('Missing .about element')
  } else {
    const about = aboutEl.text().trim()
    if (!about || about.toLowerCase() === 'about you') {
      errors.push('.about is empty or still contains the template placeholder')
    }
  }

  // --- .contact ---
  const contactEl = card.find('.contact')
  if (contactEl.length === 0) {
    errors.push('Missing .contact element')
  } else {
    const links = contactEl.find('a')
    if (links.length === 0) {
      errors.push('.contact has no links')
    }
    links.each((i, link) => {
      const href = $(link).attr('href') || ''
      if (href.includes('your_user_handle')) {
        errors.push(
          `.contact link ${i + 1} still uses the template href (contains "your_user_handle")`
        )
      }
    })
  }

  // --- Security checks ---

  // Reject dangerous tags
  const dangerousTags = ['script', 'iframe', 'object']
  for (const tag of dangerousTags) {
    if (card.find(tag).length > 0) {
      errors.push(`Card contains a <${tag}> element, which is not allowed`)
    }
  }

  // Reject inline event handler attributes (onclick, onmouseover, etc.)
  card.find('*').each((_, el) => {
    const attribs = el.attribs || {}
    for (const attr of Object.keys(attribs)) {
      if (/^on\w+/i.test(attr)) {
        errors.push(`Card contains an inline event handler attribute "${attr}", which is not allowed`)
      }
    }
  })

  // Reject hrefs that don't start with http:// or https://
  card.find('[href]').each((i, el) => {
    const href = ($(el).attr('href') || '').trim()
    if (href && !href.startsWith('http://') && !href.startsWith('https://')) {
      errors.push(
        `Link href "${href}" is not allowed — all links must start with https:// or http://`
      )
    }
  })

  // --- .resources (optional, 0–5 items) ---
  const resourcesEl = card.find('.resources')
  if (resourcesEl.length > 0) {
    const items = resourcesEl.find('li')
    if (items.length > 5) {
      errors.push(`.resources has ${items.length} items (maximum is 5)`)
    }
    items.each((i, item) => {
      const link = $(item).find('a')
      const n = i + 1
      if (link.length === 0) {
        errors.push(`Resource ${n} has no <a> element`)
        return
      }
      const href = (link.attr('href') || '').trim()
      if (!href || href === '#') {
        errors.push(`Resource ${n} has a placeholder or empty href`)
      }
    })
  }

  return errors.length === 0 ? { valid: true } : { valid: false, errors }
}

module.exports = { validateCard }
