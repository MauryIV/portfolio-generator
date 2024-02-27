const fs = require("fs");

const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What's your name? Don't worry I'm not an evil robot...",
      name: "username"
    },
    {
      type: "input",
      message: "Thank you for that vital information, where are you from human?",
      name: "location"
    },
    {
      type: "input",
      message: "Just a reminder, I'm not a robot here to steal your information and use to my advantage... So anyway, tell me about yourself, give me a little bio.",
      name: "bio"
    },
    {
      type: "input",
      message: "You definitely sound like a human, very good. What is your LinkedIn URL? (don't forget a https://)",
      name: "linkedin"
    },
    {
      type: "input",
      message: "You are definitely extremely trusting... excellent! What is your Github URL? (that https:// please!)",
      name: "github"
    }
  ])
    .then((response) =>
    fs.appendFile('index.HTML',
`<!DOCTYPE html>
<html>
  <head>
    <title>Maury Hughes IV Portfolio</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
  </head>
  <body>
    <header id="top">
      <h1>${response.username}</h1>
    </header>
    <main>
      <section class="content" id="about-me">
        <aside class="root">
          <h2>About Me</h2>
        </aside>
        <div class="info">
          <p>I am from ${response.location}.</p>
          <p>${response.bio}</p>
        </div>
      </section>
      <section class="content" id="contact-me">
        <aside class="root">
          <h2>Contact Me</h2>
        </aside>
        <div class="info">
          <ul class="links">
            <li><a href="${response.github}">Github</a></li>
            <li><a href="${response.linkedin}">LinkedIn</a></li>
          </ul>
        </div>
      </section>
    </main>
  </body>
</html>`
, (err) =>
    err ? console.error(err) : console.log('In no relation to the questions I asked, does the index.HTML look like a humans portfolio?')
  ));
