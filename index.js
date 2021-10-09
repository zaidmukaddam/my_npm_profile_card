#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

var prompt = inquirer.createPromptModule();


const data = {
    name: chalk.bold.blue("Zaid Altaf Mukaddam"),
    nickname: chalk.bold("Zaid"),

    web: chalk.green("https://zaidmukaddam.github.io         "),
    blog: chalk.green("https://blog.realzaidmukaddam.tech     "),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("zaidmukaddam   "),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~zaidmukaddam          "),
    github: chalk.gray("https://github.com/") + chalk.white("zaidmukaddam     "),
    npx: chalk.red("npx") + " " + chalk.white("zaidmukaddam"),

    labelWeb: chalk.white.bold("Web:"),
    labelBlog: chalk.white.bold(" Blog:"),
    labelTwitter: chalk.white.bold("Twitter:"),
    labelNpm: chalk.white.bold("  npm:"),
    labelGitHub: chalk.white.bold("GitHub:"),
    labelLinkedIn: chalk.white.bold("  LinkedIn:"),
    labelCard: chalk.white.bold("Card:"),
};

const box = boxen(
    [
        `${data.name} | ${data.nickname}🚀`,
        ``,
        
        `${data.labelWeb}  ${data.web}`,
        `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelNpm}  ${data.npm}`,
        `${data.labelGitHub}  ${data.github}`,
        ``,
        `${data.npx}`,
        ``,
        `${italic.bold("I am an enthusiastic developer.")}`,
        `${italic("There is so much to learn and much more to build.")}`,
        `${italic("So far and for this, I am very grateful.")}`,
    ].join("\n"),
    {
        borderColor: "blue",
        borderStyle: "double",
        padding: 1,
        margin: 1,
        float: "center",
        align: "center",
    }
);

const questions = [
    {
        type: "list",
        name: "action",
        message: "What's next?",
        choices: [
            {
                name: `Send me an ${green.bold("email")}?`,
                value: () => {
                    open("mailto:zaidaltafmukaddam@gmail.com");
                    console.log(
                        "\nPlease wait, your email application will pop up soon,\nsee ya.\n"
                    );
                },
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Ok, bye.\n");
                },
            },
        ],
    },
];

console.log(box);

const tip = [
    `${white.bold(
        "Tip"
    )}: if the terminal supports, try ${cyanBright.bold(
        "cmd/ctrl + click"
    )} the link above 😉`,
    "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
