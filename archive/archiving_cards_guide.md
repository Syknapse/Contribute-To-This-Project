# Archive cards

For maintainers only

## How to archive cards

1. Open a terminal in the project root.
1. Run `npm run prettier-html`. This will run Prettier on the html.index file and ensure there are no html errors. This is important to archive correctly.
1. If the Prettier command shows errors you must fix those first. Usually the errors are a missing closing html tag somewhere. Once the command runs with no errors you are ready to archive.
1. In the same terminal run `npm run archive_cards`. This will start the automatic archiving process described below in the how it works section.
1. Once the terminal process is finished successfully you should have a new json file in archive/cards, the number of files should be automatically updated in archive/archiveFilesTotals and the html.index should have the template and 10 other cards left, all the rest should be automatically eliminated.
1. In the index.html card you will find the leftover comments form archived cards, you can delete all of those.
1. Review that the archived cards are still showing up on the project website (checking locally by opening VS Code live Server or the index in your browser)
1. If everything is correct and the archives have been converted correctly and still show up on the page, you can commit your changes and push to origin

Warning: never commit and push unless you make sure all the process has been completed without errors

## When to archive and why

We archive the cards to keep the index.html file as light as possible. This helps contributors work with a small file and maintainers deal with much less conflicts.

In theory there is no limit on when you can archive as long as there are more than 10 cards in the index. We prefer to have many small json files in the archive than wait until there are too many cards in the index. So whenever you have time run the script and follow the steps above.

## How it all works

The archive_cards_scrip.js is a node script that does several things.  
This script will copy all the .cards elements in index.html. It will leave the first 11 cards (template + 10 cards) and convert all the remainder into json format.  
It will create a new json file called archive_{number}.json incrementing number by 1, it will copy the json cards there.  
It will then remove the cards from the html file.  
Finally it will update a special file called archiveFilesTotal with the number of files in the archive/cards directory

When the project is loaded in a browser, script.js runs. It imports the number of files from archiveFilesTotal.  
It then uses this to import all the json archives in archive/cards directory by using the archive_{number}.json based on the number of files.  
Each json file is imported and the data it contained is mapped over the html card template, then it gets appended to the .grid element.  

This way the cards are no longer cluttering the html file, but still appear on the page.