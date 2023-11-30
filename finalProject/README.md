#  Final Project
I wrote a script for the final project that keeps track of account names and numbers for a chart of accounts in an accounting setting.
## What is does
The script will keep a running list of account names and numbers and also make sure you won't add any accounts with the same number as another account.
## How to run
You will need to install NodeJS from [https://nodejs.org/en](https://nodejs.org/en).  Next, run the following command in the directory that the script was placed in to install the dependencies.
```bash
npm install
```
Afterward you should be able to run the command below to run the script.
```bash
node accountCreator.js
```
## Why is this useful?
This script is useful in an accounting setting to keep track of a chart of accounts.  The script will keep this chart digitally and make sure there are no duplicate account numbers.
## What sources did I use?
I referenced the documentation for the modules that I included.
* [https://www.npmjs.com/package/sqlite3](https://www.npmjs.com/package/sqlite3)
* [https://www.npmjs.com/package/inquirer?activeTab=readme](https://www.npmjs.com/package/inquirer?activeTab=readme)