# Employee Profile Generator

## Table of Contents

- [Description](#Description) 
- [Installation](#Installation) 
- [Usage](#Usage)
- [Methods/Tech](#Methods/Tech)
- [Output](#Output)

## Description

- This project is a CLI application that generates an HTML file for
a webpage that contains information about employees on a software engineering
team.

## Installation

- Download repo and run the app.js file using node with the following command:
    - node app
- Follow the command line prompts

## Usage

- This application will take the user through a series of questions on the command line
in order to build profiles for different team members.
- Upon running the app, the user will be presented with 3 options for the employee role:
    - Manager
    - Engineer
    - Intern
- Based on which role is chosen, the user will then be presented will a set of questions,
specific to the role of each employee.
- After all profile questions have been answered, the user will be asked whether they want
to add another team member or finish the application.
- Upon finishing adding team members, the user will be notified on the command line that
their team.html page was successfully created.
    - This team.html file can be found in the output folder

## Methods/Tech

- This application was created using JavaScript ES6 and runs on node.js.
- Included Node dependencies are:
    - Inquirer - For command line user prompts
    - Jest - For running tests on ES6 classes
    - FS - For reading and writing the HTML
    - Path - To target directories
- This application is styled with Bootstrap and FontAwesome

## Output

- Included in this repo:
    - An example team.html file created using this app can be found in
    the output folder.
    - A screenshot of that team.html can be found in the assets folder.
    - Check out a video of the app functionality here: