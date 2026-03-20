'use strict'

// Exact placeholder values from the index.html template card
const PLACEHOLDERS = {
  name: 'your name',
  about: 'about you',
  contactHref: 'your_user_handle',
  resourceHref: '#',
  resourceTitles: ['first resource', 'second resource', 'third resource'],
  resourceTexts: ['resource 1', 'resource 2', 'resource 3'],
}

const MAX_RESOURCES = 5

/**
 * Validate a contributor card.
 *
 * @param {import('cheerio').CheerioAPI} $ - cheerio instance loaded with the card HTML
 * @param {object} opts
 * @param {string[]} opts.changedFiles - list of files changed in the PR (for file-scope check)
 * @returns {{ valid: true } | { valid: false, errors: string[] }}
 */
function validateCard($, { changedFiles = [] } = {}) {
  const errors = []

  // --- File scope (re-assert; categorisation already checked this) ---
  if (changedFiles.length > 0) {
    const nonIndex = changedFiles.filter(f => f !== 'index.html')
    if (nonIndex.length > 0) {
      errors.push(`PR changes files other than index.html: ${nonIndex.join(', ')}`)
    }
  }

  // --- Card presence ---
  const cards = $('.card')
  if (cards.length === 0) {
    errors.push('No .card div found in the diff')
    return { valid: false, errors }
  }
  if (cards.length > 1) {
    errors.push(`Expected exactly 1 .card div in the diff, found ${cards.length}`)
    return { valid: false, errors }
  }

  const card = cards.first()

  // --- .name ---
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

  // --- .about ---
  const aboutEl = card.find('.about')
  if (aboutEl.length === 0) {
    errors.push('Missing .about element')
  } else {
    const about = aboutEl.text().trim()
    if (!about) {
      errors.push('.about is empty')
    } else if (about.toLowerCase() === PLACEHOLDERS.about) {
      errors.push(`.about still contains the template placeholder ("${about}")`)
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
      if (href.includes(PLACEHOLDERS.contactHref)) {
        errors.push(
          `.contact link ${i + 1} still uses the template href (contains "your_user_handle")`
        )
      }
    })
  }

  // --- .resources (optional, 0–5 items) ---
  const resourcesEl = card.find('.resources')
  if (resourcesEl.length > 0) {
    const items = resourcesEl.find('li')

    if (items.length > MAX_RESOURCES) {
      errors.push(`.resources has ${items.length} items (maximum is ${MAX_RESOURCES})`)
    }

    items.each((i, item) => {
      const link = $(item).find('a')
      const n = i + 1

      if (link.length === 0) {
        errors.push(`Resource ${n} has no <a> element`)
        return
      }

      const href = (link.attr('href') || '').trim()
      const title = (link.attr('title') || '').trim()
      const text = link.text().trim()

      if (!href || href === PLACEHOLDERS.resourceHref) {
        errors.push(`Resource ${n} has a placeholder or empty href`)
      }
      if (!title || PLACEHOLDERS.resourceTitles.includes(title.toLowerCase())) {
        errors.push(`Resource ${n} has a placeholder or empty title attribute`)
      }
      if (PLACEHOLDERS.resourceTexts.includes(text.toLowerCase())) {
        errors.push(`Resource ${n} has placeholder link text ("${text}")`)
      }
    })
  }

  return errors.length === 0 ? { valid: true } : { valid: false, errors }
}

module.exports = { validateCard }
