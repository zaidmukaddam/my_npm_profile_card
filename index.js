#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

const { bold, green, gray, cyan, red, white, italic, cyanBright, blue } = chalk;
const { createPromptModule } = inquirer;

clear();

var prompt = createPromptModule();


const data = {
    name: bold.blue("Zaid Altaf Mukaddam"),
    nickname: bold("Zaid"),

    web: green("https://zaidmukaddam.github.io"),
    twitter: cyanBright("https://twitter.com/") + gray("zaidmukaddam"),
    npm: cyanBright("https://npmjs.com/") + red("~zaidmukaddam"),
    github: cyanBright("https://github.com/") + white("zaidmukaddam"),
    instagram: cyan("https://instagram.com/") + blue("zaidmukaddam.c"),
    linkedin: cyanBright("https://linkedin.com/in/") + green("zaid-mukaddam-26b155202"),
    npx: red("npx") + " " + white("zaidmukaddam"),

    labelWeb: white.bold(" Web:"),
    labelInstagram: white.bold("Instagram:"),
    labelTwitter: white.bold("Twitter:"),
    labelNpm: white.bold("  npm:"),
    labelGitHub: white.bold("GitHub:"),
    labelLinkedIn: white.bold("LinkedIn:"),
    labelCard: white.bold("Card:"),
};

const box = boxen(
    [
        `${cyan('{{')} ${data.name} | ${data.nickname} ${cyan('}}')}`,
        ``,

        `${data.labelWeb}  ${data.web}`,
        `${data.labelInstagram} ${data.instagram}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelNpm}  ${data.npm}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}\n${data.linkedin}`,
        ``,
        `${data.npx}`,
        ``,
        `${italic.bold("I am an enthusiastic developer.")}`,
        `${italic("There is so much to learn and much more to build.")}`,
        `${italic("So far and for this, I am very grateful.")}`,
    ].join("\n"),
    {
        borderColor: "redBright",
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
