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
