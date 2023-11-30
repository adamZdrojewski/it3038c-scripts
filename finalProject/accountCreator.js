// Require sqlite3 and inquirer
const sqlite3 = require("sqlite3").verbose();
const inquirer = require("inquirer");

// Load DB file
const db = new sqlite3.Database("./accounts.db", sqlite3.OPEN_READWRITE, (err) => {
    if(err) {
        throw new Error(err);
    }
});

// Prompt user
inquirer.prompt([
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["List all accounts", "Create new account"]
    }
]).then((answers) => {
    if(answers.action === "List all accounts") {
        // List all accounts
        db.all("SELECT * FROM accounts ORDER BY accountId", [], (err, rows) => {
            if(err) {
                throw new Error(err);
            } else {
                rows.forEach((row) => {
                    console.log(`${row.accountId} - ${row.accountName}`);
                });
            }
        });
    } else if(answers.action === "Create new account") {
        // Create new account - prompt user for account information
        inquirer.prompt([
            {
                type: "number",
                name: "accountId",
                message: "What is the account number?"
            },
            {
                type: "input",
                name: "accountName",
                message: "What is the account name?"
            }
        ]).then((answers) => {
            // Check if input number is a number
            if(isNaN(answers.accountId)) {
                console.error("Error: Account ID must be a valid number!");
                process.exit();
            }
            
            // Check if account id is already in use
            db.all("SELECT * FROM accounts WHERE accountId=?", [answers.accountId], (err, rows) => {
                if(err) {
                    throw new Error(err);
                } else {
                    if(rows.length > 0) {
                        console.error("Error: This account number is already in use!");
                        process.exit();
                    } else {
                        // Add new account to DB file
                        db.run("INSERT INTO accounts (accountId, accountName) VALUES (?, ?)", [answers.accountId, answers.accountName], (err) => {
                            if(err) {
                                throw new Error(err);
                            } else {
                                console.log(`Account ${answers.accountName} (${answers.accountId}) has been added!`);
                            }
                        });
                    }
                }
            });
        });
    }
});