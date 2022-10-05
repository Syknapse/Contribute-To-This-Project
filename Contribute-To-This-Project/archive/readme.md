# Archive cards

We use this folder to store older cards submitted by our contributors.  
**These cards still appear on the website.** We use the `getArchiveCards()` method in `script.js` to import them back into the main document.  
This is all to make sure our main `index.html` is not overwhelming with thousands of lines of codes.

## Add cards to an existing archive file

Every time we have a number of cards in the index we can move them to an archive file.  
We only need to leave about 10 cards in the index to serve as an example for contributors.  
Add those cards to the latest archive file in this directory.  
If an archive directory gets too big (say around 3k lines of code) we can create a new archive file.

## Create a new archive file

Create a new html file and name it `archive_<number>.html` where `<number>` is the next available number.  
Copy the following template into it.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="../assets/style.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
  </head>
  <body class="container" style="overflow: hidden">
    <div class="grid">
      <!-- Insert archive cards here -->
    </div>
  </body>
</html>
```

Then add the cards into it.

**IMPORTANT** You must update the variable `NUMBER_OF_FILES` in [script.js](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/assets/script.js#L40). This is needed to import the html files.

## How does it work

The `getArchiveCards()` method creates an `<object>` element for each archived file. The total number of archived files is based on the manually updated `NUMBER_OF_FILES`.
These import the cards into the main document. But they are within their own context created by the object element.  
We wait until the elements have loaded then we go into the context's `contentDocument` and retrieve the cards.  
Then we simply append them back into the main container with the rest of the cards in the `index.html`.  
Finally we clean up the document by removing the unneeded `<object>`.
