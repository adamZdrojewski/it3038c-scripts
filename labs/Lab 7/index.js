import inquirer from "inquirer";

inquirer.prompt([
    {
        type: "input",
        name: "firstName",
        message: "What is your first name: "
    },
    {
        type: "list",
        name: "favoriteColor",
        message: "What is your favorite color: ",
        choices: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
    },
    {
        type: "checkbox",
        name: "likedLanguages",
        message: "What languages do you like: ",
        choices: ["Powershell", "Python", "NodeJS"]
    }
]).then((answers) => {
    console.log(`
    ${answers.firstName}'s preferences
    Color: ${answers.favoriteColor}
    Languages: ${JSON.stringify(answers.likedLanguages)}
    `);
});