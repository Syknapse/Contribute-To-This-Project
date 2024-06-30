const fs = require('fs')
const cheerio = require('cheerio')

const htmlFile = `index.html`
const requiredcardCount = 11

fs.readFile(htmlFile, 'utf8', (err, html) => {
  if (err) {
    console.error(`\u{1F6D1} Error reading ${htmlFile}:`, err)
    return
  }

  const $ = cheerio.load(html)
  const $contributions = $('#contributions')
  const $cards = $contributions.find('.card')
  const cardsCount = $cards.length

  if (cardsCount > requiredcardCount) {
    return console.log(`\u{1F6D1} It's not the right time to edit the ${htmlFile} . Please try again later.`)
  } else {
    // Get all the cards inside the contributions span
    const cards = $cards.toArray()

    // Remove all the content inside the contributions span
    $contributions.empty()

    // Add the cards back inside the contributions span using the custom HTML comment template
    $contributions.append(
      `\n<!-- ================================================ --> \n<!-- ==================  TEMPLATE  ================== --> \n<!-- DO NOT modify the TEMPLATE directly, make a copy and paste it below -->\n \n<!-- ________ *TEMPLATE: MAKE A COPY* Contributor card START ________  -->\n`
    )
    $contributions.append(cards[0])
    $contributions.append(
      `\n<!-- ________ *TEMPLATE* Contributor card END ________  -->\n \n<!-- COPY everything ABOVE this, from contributor card start to end along with the "START" and "END" comment lines --> \n<!-- ============== ^^^^ TEMPLATE ^^^^ ============== --> \n<!-- ================================================ -->\n \n<!-- DO NOT modify the TEMPLATE directly, make a copy and paste it below --> \n<!-- Keep one line of space above and below your card --> \n<!-- ========= Paste YOUR CARD directly BELOW this line ========= -->\n \n<!-- ========= START ========= -->\n`
    )

    for (let i = 1; i < cards.length; i++) {
      $contributions.append(`\n<!-- ========= Card ${i} START =========  -->\n`)
      $contributions.append(cards[i])
      $contributions.append(`\n<!-- ========= Card ${i} END =========  -->\n`)
    }

    $contributions.append(
      `\n<!-- ========= END ========= -->\n \n<!-- <<<<< Do not change anything below this line >>>>> --> \n<!-- -------------------------------------------------- -->\n`
    )

    // Save the updated HTML file
    fs.writeFile(htmlFile, $.html(), err => {
      if (err) {
        console.error(`\u{1F6D1} Error updating ${htmlFile}:`, err)
        return
      }

      console.log(`\u{1F4AF} ${htmlFile} updated successfully`)
    })
  }
})
