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
  about: ['about you', 'write a sentence or two about yourself'],
  contact: {
    href: ['your_user_handle', 'your_user_handle}', 'your-user-handle'],
    text: ['your handle', 'your_handle', 'your-handle'],
  },
  resources: {
    title: ['first resource', 'second resource', 'third resource', 'resource 1', 'resource 2', 'resource 3'],
    text: ['resource 1', 'resource 2', 'resource 3', 'resource 4', 'resource 5'],
  },
}

// Valid Font Awesome icon prefixes
const VALID_ICON_PREFIXES = ['fab', 'fas', 'far', 'fal', 'fad', 'fat']

// Common social platforms for URL validation
const SOCIAL_PATTERNS = {
  github: { pattern: /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/i, name: 'GitHub' },
  twitter: { pattern: /^https?:\/\/(www\.)?(twitter|x)\.com\/[a-zA-Z0-9_]+\/?$/i, name: 'Twitter/X' },
  linkedin: { pattern: /^https?:\/\/(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9_-]+\/?$/i, name: 'LinkedIn' },
  youtube: { pattern: /^https?:\/\/(www\.)?youtube\.com\/(c|channel|user)\/[a-zA-Z0-9_-]+\/?$/i, name: 'YouTube' },
  instagram: { pattern: /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_.]+\/?$/i, name: 'Instagram' },
  facebook: { pattern: /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9.]+\/?$/i, name: 'Facebook' },
  discord: { pattern: /^https?:\/\/(www\.)?discord\.(gg|com\/invite)\/[a-zA-Z0-9]+\/?$/i, name: 'Discord' },
  devto: { pattern: /^https?:\/\/(www\.)?dev\.to\/[a-zA-Z0-9_]+\/?$/i, name: 'Dev.to' },
  portfolio: { pattern: /^https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}/, name: 'Personal website' },
}

/**
 * Validate if a URL is well-formed
 * @param {string} url - URL to validate
 * @returns {{ valid: boolean, error: string|null }}
 */
function validateUrl(url) {
  if (!url || typeof url !== 'string') {
    return { valid: false, error: 'URL is empty or not a string' }
  }

  const trimmed = url.trim()

  // Check protocol
  if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
    return { valid: false, error: 'URL must start with http:// or https://' }
  }

  // Try to parse as URL
  try {
    const parsed = new URL(trimmed)

    // Check for valid hostname
    if (!parsed.hostname || parsed.hostname === '') {
      return { valid: false, error: 'URL has no valid hostname' }
    }

    // Check for common typos in URLs
    if (parsed.hostname.includes('..')) {
      return { valid: false, error: 'URL contains invalid hostname' }
    }

    // Check for placeholder-like patterns in URL
    const placeholderPatterns = ['your_', 'your-', 'example', 'username', 'user_handle', 'placeholder']
    const lowerUrl = trimmed.toLowerCase()
    for (const pattern of placeholderPatterns) {
      if (lowerUrl.includes(pattern)) {
        return { valid: false, error: `URL contains placeholder text "${pattern}"` }
      }
    }

    return { valid: true, error: null }
  } catch (e) {
    return { valid: false, error: `Invalid URL format: ${e.message}` }
  }
}

/**
 * Check if text matches a placeholder pattern
 * @param {string} text - Text to check
 * @param {string[]} patterns - Array of placeholder patterns to match against
 * @returns {{ isPlaceholder: boolean, pattern: string|null }}
 */
function isPlaceholderText(text, patterns) {
  if (!text || typeof text !== 'string') return { isPlaceholder: false, pattern: null }

  const lower = text.toLowerCase().trim()
  for (const pattern of patterns) {
    if (lower === pattern.toLowerCase() || lower.includes(pattern.toLowerCase())) {
      return { isPlaceholder: true, pattern }
    }
  }
  return { isPlaceholder: false, pattern: null }
}

/**
 * Check if an icon class is valid Font Awesome format
 * @param {string} iconClass - Icon class string (e.g., "fab fa-github")
 * @returns {{ valid: boolean, error: string|null }}
 */
function validateIconClass(iconClass) {
  if (!iconClass || typeof iconClass !== 'string') {
    return { valid: false, error: 'Icon class is empty' }
  }

  const parts = iconClass
    .trim()
    .split(/\s+/)
    .filter(p => p)

  // Must have at least prefix and icon name
  if (parts.length < 2) {
    return { valid: false, error: `Icon class "${iconClass}" is incomplete (expected format like "fab fa-github")` }
  }

  // Check prefix
  const prefix = parts[0]
  if (!VALID_ICON_PREFIXES.includes(prefix)) {
    return { valid: false, error: `Invalid icon prefix "${prefix}" (valid: ${VALID_ICON_PREFIXES.join(', ')})` }
  }

  // Check icon name format
  const iconName = parts[1]
  if (!iconName.startsWith('fa-')) {
    return { valid: false, error: `Icon name "${iconName}" should start with "fa-"` }
  }

  return { valid: true, error: null }
}

/**
 * Generate a fix suggestion for an error
 * @param {string} error - Error message
 * @param {object} context - Context information
 * @returns {string|null}
 */
function generateFixSuggestion(error, context = {}) {
  const suggestions = {
    // Name errors
    '.name is empty': 'Add your name to the <p class="name"> element.',
    'template placeholder': 'Replace "Your name" with your actual name.',
    // About errors
    '.about is empty': 'Write a brief description about yourself in the <p class="about"> element.',
    '.about element': 'Make sure your card has a <p class="about"> element with your bio.',
    // Contact errors
    '.contact has no links': 'Add at least one contact link with your GitHub profile.',
    'template href': 'Replace "your_user_handle" with your actual GitHub username.',
    // Resource errors
    'placeholder or empty href': 'Replace "#" with a real URL like "https://example.com".',
    'no <a> element': 'Add an <a> tag inside each <li> in your resources section.',
    'maximum is 5': 'Reduce the number of resources to 5 or fewer.',
    // Security errors
    '<script>': 'Remove any <script> tags — JavaScript is not allowed in cards.',
    '<iframe>': 'Remove any <iframe> tags — iframes are not allowed in cards.',
    '<object>': 'Remove any <object> tags — object elements are not allowed in cards.',
    'event handler': 'Remove any onclick, onmouseover, or other event handler attributes.',
  }

  for (const [key, suggestion] of Object.entries(suggestions)) {
    if (error.toLowerCase().includes(key.toLowerCase())) {
      return suggestion
    }
  }

  return null
}

/**
 * Validate a contributor card.
 *
 * @param {import('cheerio').CheerioAPI} $ - cheerio instance loaded with card HTML
 * @param {object} opts
 * @param {string[]} opts.changedFiles - PR changed files list (for file-scope check)
 * @param {'phase1'|'phase2'} opts.mode - validation strictness (default: 'phase1')
 * @returns {{ valid: true } | { valid: false, errors: string[], suggestions: string[] }}
 */
function validateCard($, { changedFiles = [], mode = 'phase1' } = {}) {
  const errors = []
  const warnings = []
  const suggestions = []

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
    return { valid: false, errors, suggestions }
  }
  if (cards.length > 1) {
    errors.push(
      `Expected exactly 1 .card div in the diff, found ${cards.length} — the PR may have included the whole file`
    )
    return { valid: false, errors, suggestions }
  }

  const card = cards.first()

  // --- .name (hard block in both modes) ---
  const nameEl = card.find('.name')
  if (nameEl.length === 0) {
    errors.push('Missing .name element')
    suggestions.push('Add a <p class="name"> element with your name.')
  } else {
    const name = nameEl.text().trim()
    if (!name) {
      errors.push('.name is empty')
      suggestions.push('Add your name to the <p class="name"> element.')
    } else if (name.toLowerCase() === PLACEHOLDERS.name) {
      errors.push(`.name still contains the template placeholder ("${name}")`)
      suggestions.push(`Replace "Your name" with your actual name.`)
    } else if (name.length < 2) {
      errors.push(`.name seems too short ("${name}")`)
      suggestions.push('Your name should be at least 2 characters.')
    }
  }

  // Early return for phase1 — if name is fine, we're done
  if (mode === 'phase1') {
    return errors.length === 0 ? { valid: true } : { valid: false, errors, suggestions }
  }

  // -----------------------------------------------------------------------
  // Phase 2 checks — stricter, applied at PR submission time
  // -----------------------------------------------------------------------

  // --- .about ---
  const aboutEl = card.find('.about')
  if (aboutEl.length === 0) {
    errors.push('Missing .about element')
    suggestions.push('Add a <p class="about"> element with a brief description of yourself.')
  } else {
    const about = aboutEl.text().trim()
    const aboutCheck = isPlaceholderText(about, PLACEHOLDERS.about)
    if (!about) {
      errors.push('.about is empty')
      suggestions.push('Write a brief description about yourself in the <p class="about"> element.')
    } else if (aboutCheck.isPlaceholder) {
      errors.push(`.about still contains the template placeholder`)
      suggestions.push('Replace the placeholder text with a sentence about yourself.')
    } else if (about.length < 10) {
      warnings.push('.about seems very short — consider adding more detail')
    } else if (about.length > 500) {
      warnings.push('.about is very long — consider keeping it under 500 characters')
    }
  }

  // --- .contact ---
  const contactEl = card.find('.contact')
  if (contactEl.length === 0) {
    errors.push('Missing .contact element')
    suggestions.push('Add a <p class="contact"> element with at least one link to your profile.')
  } else {
    const links = contactEl.find('a')
    if (links.length === 0) {
      errors.push('.contact has no links')
      suggestions.push(
        'Add at least one link with your GitHub profile: <a href="https://github.com/your-username">Your handle</a>'
      )
    }

    const seenHrefs = new Set()
    links.each((i, link) => {
      const href = ($(link).attr('href') || '').trim()
      const linkText = $(link).text().trim()
      const linkNum = i + 1

      // Check for placeholder href
      const hrefCheck = isPlaceholderText(href, PLACEHOLDERS.contact.href)
      if (hrefCheck.isPlaceholder) {
        errors.push(`.contact link ${linkNum} still uses the template href (contains "${hrefCheck.pattern}")`)
        suggestions.push(`Replace "${href}" with your actual GitHub URL like "https://github.com/your-username".`)
      } else if (href) {
        // Validate URL format
        const urlValidation = validateUrl(href)
        if (!urlValidation.valid) {
          errors.push(`.contact link ${linkNum} has invalid URL: ${urlValidation.error}`)
          suggestions.push(`Fix the URL "${href}" — make sure it starts with https:// and is a valid URL.`)
        }

        // Check for duplicate URLs
        if (seenHrefs.has(href.toLowerCase())) {
          warnings.push(`.contact link ${linkNum} has a duplicate URL: ${href}`)
        }
        seenHrefs.add(href.toLowerCase())
      }

      // Check for placeholder link text
      const textCheck = isPlaceholderText(linkText, PLACEHOLDERS.contact.text)
      if (textCheck.isPlaceholder) {
        warnings.push(`.contact link ${linkNum} text looks like a placeholder: "${linkText}"`)
      }

      // Check if link text is empty
      if (!linkText) {
        errors.push(`.contact link ${linkNum} has no visible text`)
        suggestions.push(`Add some text inside the <a> tag so the link is clickable.`)
      }
    })

    // Check icon classes
    contactEl.find('i').each((i, icon) => {
      const iconClass = ($(icon).attr('class') || '').trim()
      if (iconClass) {
        const iconValidation = validateIconClass(iconClass)
        if (!iconValidation.valid) {
          warnings.push(`Contact icon ${i + 1}: ${iconValidation.error}`)
        }
      }
    })
  }

  // --- Security checks ---

  // Reject dangerous tags
  const dangerousTags = ['script', 'iframe', 'object', 'embed', 'form', 'input', 'style']
  for (const tag of dangerousTags) {
    if (card.find(tag).length > 0) {
      errors.push(`Card contains a <${tag}> element, which is not allowed`)
      suggestions.push(`Remove the <${tag}> element from your card.`)
    }
  }

  // Reject inline event handler attributes (onclick, onmouseover, etc.)
  card.find('*').each((_, el) => {
    const attribs = el.attribs || {}
    for (const attr of Object.keys(attribs)) {
      if (/^on\w+/i.test(attr)) {
        errors.push(`Card contains an inline event handler attribute "${attr}", which is not allowed`)
        suggestions.push(`Remove the "${attr}" attribute from your card.`)
      }
    }
  })

  // Reject hrefs that don't start with http:// or https://
  card.find('[href]').each((i, el) => {
    const href = ($(el).attr('href') || '').trim()
    if (href && !href.startsWith('http://') && !href.startsWith('https://')) {
      errors.push(`Link href "${href}" is not allowed — all links must start with https:// or http://`)
      suggestions.push(`Change "${href}" to start with "https://".`)
    }
  })

  // Reject suspicious src attributes
  card.find('[src]').each((i, el) => {
    const src = ($(el).attr('src') || '').trim()
    if (src && !src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('data:')) {
      warnings.push(`Element has a suspicious src attribute: "${src}"`)
    }
  })

  // --- .resources (optional, 0–5 items) ---
  const resourcesEl = card.find('.resources')
  if (resourcesEl.length > 0) {
    const items = resourcesEl.find('li')
    if (items.length > 5) {
      errors.push(`.resources has ${items.length} items (maximum is 5)`)
      suggestions.push(`Reduce the number of resources to 5 or fewer.`)
    }

    // If resources section exists but has no items, that's a warning
    if (items.length === 0) {
      warnings.push('.resources section exists but has no list items')
    }

    const seenResourceHrefs = new Set()
    items.each((i, item) => {
      const link = $(item).find('a')
      const n = i + 1
      if (link.length === 0) {
        errors.push(`Resource ${n} has no <a> element`)
        suggestions.push(`Add a link to resource ${n} using <a href="URL">Link text</a>.`)
        return
      }

      const href = (link.attr('href') || '').trim()
      const title = (link.attr('title') || '').trim()
      const text = link.text().trim()

      // Check href
      if (!href || href === '#') {
        errors.push(`Resource ${n} has a placeholder or empty href`)
        suggestions.push(`Replace "#" in resource ${n} with a real URL like "https://example.com".`)
      } else {
        // Validate URL format
        const urlValidation = validateUrl(href)
        if (!urlValidation.valid) {
          errors.push(`Resource ${n} has invalid URL: ${urlValidation.error}`)
          suggestions.push(`Fix the URL in resource ${n} — make sure it starts with https://.`)
        }

        // Check for duplicate resource URLs
        if (seenResourceHrefs.has(href.toLowerCase())) {
          warnings.push(`Resource ${n} has a duplicate URL: ${href}`)
        }
        seenResourceHrefs.add(href.toLowerCase())
      }

      // Check title attribute
      const titleCheck = isPlaceholderText(title, PLACEHOLDERS.resources.title)
      if (!title) {
        warnings.push(`Resource ${n} is missing a title attribute (hover text)`)
      } else if (titleCheck.isPlaceholder) {
        warnings.push(`Resource ${n} title looks like a placeholder: "${title}"`)
      }

      // Check link text
      const textCheck = isPlaceholderText(text, PLACEHOLDERS.resources.text)
      if (!text) {
        errors.push(`Resource ${n} link has no visible text`)
        suggestions.push(`Add text inside the <a> tag for resource ${n}.`)
      } else if (textCheck.isPlaceholder) {
        warnings.push(`Resource ${n} link text looks like a placeholder: "${text}"`)
      }
    })
  }

  // --- Structure validation ---
  // Check for required child elements of .card
  const requiredChildren = ['.name', '.contact', '.about']
  for (const child of requiredChildren) {
    if (card.find(child).length === 0) {
      // Already caught above, but double-check
      if (!errors.some(e => e.includes(`Missing ${child}`) || e.includes(`${child} element`))) {
        errors.push(`Card is missing required element: ${child}`)
      }
    }
  }

  // --- Content quality checks (warnings only) ---
  const fullText = card.text().trim()
  if (fullText.length < 20) {
    warnings.push('Card content seems very short — consider adding more details')
  }

  // Check for common typos or issues
  const html = $.html()
  if (html.includes('target="_blank"') && !html.includes('rel="noopener"') && !html.includes('rel="noreferrer"')) {
    warnings.push('Consider adding rel="noopener" to external links for security')
  }

  // Return result
  const result = errors.length === 0 ? { valid: true } : { valid: false, errors, suggestions }

  // Attach warnings if any
  if (warnings.length > 0) {
    result.warnings = warnings
  }

  return result
}

module.exports = { validateCard, validateUrl, validateIconClass, isPlaceholderText, generateFixSuggestion }
