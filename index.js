#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

const { bold, green, gray, cyan, red, white, italic, cyanBright } = chalk;
const { createPromptModule } = inquirer;

clear();

var prompt = createPromptModule();


const data = {
    name: bold.blue("Zaid Altaf Mukaddam"),
    nickname: bold("Zaid"),

    web: green("https://zaidmukaddam.github.io         "),
    blog: green("https://blog.realzaidmukaddam.tech     "),
    twitter: gray("https://twitter.com/") + cyan("zaidmukaddam   "),
    npm: gray("https://npmjs.com/") + red("~zaidmukaddam          "),
    github: gray("https://github.com/") + white("zaidmukaddam     "),
    npx: red("npx") + " " + white("@zaidmukaddam/zaid"),

    labelWeb: white.bold("Web:"),
    labelBlog: white.bold(" Blog:"),
    labelTwitter: white.bold("Twitter:"),
    labelNpm: white.bold("  npm:"),
    labelGitHub: white.bold("GitHub:"),
    labelLinkedIn: white.bold("  LinkedIn:"),
    labelCard: white.bold("Card:"),
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
