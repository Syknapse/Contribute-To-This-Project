const { execSync } = require('child_process')

try {
  // Get list of changed files relative to HEAD
  const output = execSync('git diff --name-only HEAD', { encoding: 'utf8' })
  const files = output
    .split('\n')
    .map(f => f.trim())
    .filter(f => f.length > 0)

  if (files.length === 0) {
    console.log('No changed files found to format.')
    process.exit(0)
  }

  console.log(`Formatting ${files.length} file(s)...`)

  // Wrap filenames in double quotes to handle spaces/special characters safely
  const formattedFilesList = files.map(f => `"${f}"`).join(' ')
  execSync(`npx prettier --write ${formattedFilesList} --ignore-unknown`, { stdio: 'inherit' })

  console.log('✅ Formatting complete!')
} catch (error) {
  console.error('❌ Formatting failed:', error.message || error)
  process.exit(1)
}
