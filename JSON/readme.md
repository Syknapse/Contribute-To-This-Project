# Converting HTML to JSON

There are 2 scripts to convert html file to json.

first run:

```cmd
npm i
```

 in the project base to download required node module.
then go to the JSON folder by running this command:

```cmd
cd JSON
```

there you will find `multiple.js` to convert every files from [`archive`](../archive/) folder to json files in the [`converted`](converted/) folder.
there is also `single.js` script to convert the `index.html` file to `archive_19.json` file in the converted folder.

all you have to do is run

```cmd
node multiple.js
```

or

```cmd
node single.js
```

Note: while working on single.js, change the file var to a desired archive no. (here it is 19 as we already have 18 archives.)

https://github.com/Syknapse/Contribute-To-This-Project/blob/44a4902afe47e10d4653649ca880f75373a38d6a/JSON/single.js#L4

Note: while working on multiple.js, change the digit in for loop to total archive files, in this case we have 18 html files in archives.

https://github.com/Syknapse/Contribute-To-This-Project/blob/44a4902afe47e10d4653649ca880f75373a38d6a/JSON/multiple.js#L5

Note: delete the files from converted folder and try the code yourself. Happy Coding!

## Roadmap

The objective is to deprecate the current archiving system for an automated one using node and json.

The preparation phase requires converting all current archive files into json.  
Once that is done, it's time to implement the new system. What we want to achieve is a single npm script that automates the archiving process from index.html.  
We will require the script to read the contents of index.html, find all elements of class .card, skip the first ten cards, convert those cards into json, export this json to the archive giving the file an ascending numerical name, then we need to rewrite the index.html removing the archived cards.  
Finally we will need to bring the archived json files back into the DOM when the page loads.

- [ ] convert all current archive files to json
- [ ] use fs.readdir to read the number of files in the new json archive and increment by one for the name of the new file, add to script of exporting to json file
- [ ] combine the convert + export + delete scripts together
- [ ] add the script to npm scripts in package.json (call it archive_cards for example)
- [ ] create the JS function to import json files from archive
- [ ] create card html template
- [ ] create function that appends cards to the dom
- [ ] once everything is tested and working, remove all old archive cards and deprecated code and docs.
- [ ] document the usage of the script in a readme with step by step instructions for maintainers and an explanation of how it all works

Example of delete cards script

```node
const fs = require('fs');
const cheerio = require('cheerio');

function deleteElements(filePath, elementSelector, keepCount) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const $ = cheerio.load(data);
    const elementsToDelete = $(elementSelector);

    // Remove elements except for the first 'keepCount' items
    elementsToDelete.slice(keepCount).remove();

    const modifiedContent = $.html();

    fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }

      console.log('Elements deleted successfully.');
    });
  });
}

// Usage example
const filePath = 'path/to/index.html';
const elementSelector = '.card';   // Selector for the elements to delete
const keepCount = 10;               // Number of elements to keep

deleteElements(filePath, elementSelector, keepCount);
