<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="Project logo"></a>
</p>

<h3 align="center">Optimum Voyage</h3>

---


## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Getting the certificate](#certificate)
- [Working with git](#git)
- [Working with code](#code)

## 🧐 About <a name = "about"></a>

Main repository for the final project for Class 09

### The Customer - Optimum Voyage

https://www.optimumvoyage.com/

#### Optimum Voyage Operator Platform Vision

The platform is intended for ship (vessel) operators working in on-shore offices. It is to function as the bridge between our cloud based service, reportings from the ships and the onshore operators of the ships. The operators (users) should at a glance be able toget an overview of their full fleets position, activity and if needed a specific ship’s current status and history. The operator will eventually be able to interact with our cloud service, but the platform will to begin with be mostly a way to convey information from Optimum Voyage to the operators.

##### Definitions:Operator
The operator is an onshore personal with the day to day responsibility for a ship’s execution of a given voyage. The operator needs to be aware of the ship’s position, fuel consumption, speed and the weather conditions it is experiencing. In collaboration, (to some extent), the operator is also the decision maker regarding route and voyage with the full overview of the economics of each.

##### Ship reportings
Upon departure and arrival a ship will send a standardized email with voyage specifications. The ship will similarly every day at noon send a noon-report containing specifications on current position, speed, consumption and more.

#### Database model

![DB Diagram](/db/Schema.png)

To get you started we have created a Database schema for you to follow. You can see a preview above or you can go to [dbdiagram.io](https://dbdiagram.io/d/5d67d65dced98361d6de0804) This schema is expected to change over the duration of the project, but since everyone is working on the same project it is important that you follow some guidelines if you need to change the DB.

1. First make sure you actually need to change the DB. We have put a lot of effort into modelling the domain, so don't change it just for the sake of changing it, but on the other hand there will likely be things we haved missed.
2. Write a migration using Knex.js that will perform the needed Schema updates. Make sure to test it thoroughly on your own branch.
3. Take the file `/db/Schema.dbml` and copy into the editor on dbdiagram.io. Make changes according to what you changed in your migration.
4. Copy paste the updated DBML code from dbdiagram.io and add it back to the `/db/Schema.dbml`.
5. Export the diagram as pdf. Take a screenshot and use it to replace the file `/db/Schema.png`.
6. Make sure to save the diagram on your dbdiagram.io account and use the "Share" button to copy the url and paste it into this readme file in the section above.
7. Commit the updated Readme, png file and DBML file.
8. Make a pull request with the updated schema files along with your migration.

## 🏁 Getting Started <a name = "getting_started"></a>
Fork the repo and clone the repo to your local machine using a terminal or a git client.

### Prerequisites

#### Mysql workbench
Install it from here: 

Windows:
https://dev.mysql.com/downloads/windows/installer/

Mac:
https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html

#### Setting up on Windows
Only thing Windows users have to do is run the following command anywhere in their terminal
(not necessarily the project folder):
`npm install -g win-node-env`

Refer to [this](https://stackoverflow.com/questions/11928013/node-env-is-not-recognized-as-an-internal-or-external-command-operable-comman) post on stackoverflow for more info.

#### Install Node

Refer to this points on how to install on your OS:
* [Linux](https://nodejs.org/en/download/package-manager/)
* [Windows](https://nodejs.org/en/download/)
* [Mac](https://nodejs.org/en/download/)

#### Installing

Run `npm install` to install all required dependencies.

#### Coding styles
Follow these best practices for coding: https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md

This can be used as a checklist for every PR you make. Go through the list and see if you have used all the best practices

#### Prettier
Install Prettier - Code formatter

Enable format on save: https://github.com/prettier/prettier-vscode#format-on-save

#### Environment variables
Environment variables are used for working with sensitive data like passwords and usernames. 

Fx connecting to a database, we dont want to commit the code that shows our password. Therefore we use environment variables instead. The `.env` **SHOULD NEVER** be commited!!!! Therefore it is in the `.gitignore` file (ignored by git). 

Here is how to get started with the `.env` file
* Create a new file in source folder and name it .env
* Copy contents from `.env.example` into newly created file .env
* Change the database part to fit your database user and password

#### Database setup
Working with sql we use a tool called knex which helps with writing queries and with changing the database structure. Check these out: https://www.quora.com/What-is-Knex-js https://knexjs.org/#Builder-identifier-syntax

* Install knex cli globally with: `npm i -g knex`
* Update the connection details to the database in the `.env` file
* after the server runs and you see a `connection to <db_name> db successful!` message you are ready to migrate tables
* To make a new migration make sure you terminal is where the `knexfile.js` is. Otherwise `cd` into that folder! run `knex migrate:make MIGRATION_NAME`. Fx if i want to make a new users table i would run `knex migrate:make users`. This would set up the migration file (under the `migrations` folder) for me to write the users table. 
* To make a new seed i would run `knex seed:make 01_SEED_NAME`. Fx `knex seed:make 01_USERS`. This would create a new seed file in the folder `seeds`.
* To then actually apply the migrations and the seeds, run `npm run db:setup`
* If it was successful you should now have the tables and seeds in the database 🎉

## 🎈 Usage <a name="usage"></a>

To run:

`npm run dev`

## 💻 Working with GIT <a name="git"></a>
Working with git is a HUGE part of the final project. This is how you should be working with git in the final project:

This repo has two branches:
- `master` - Used for deployment. This branch should be as clean as is possible. NEVER directly commit to this branch!
- `develop` - A branch where we do all development. That means that all feature branches should be merged into this branch. Very important! 

Lets get started with our first feature. Lets say we should build a cookies popup:
1. Fork this repo. You now have a version of this repo on your profile.
2. BEFORE WE WRITE ONE SINGLE LINE OF CODE, create the feature branch where we will do all our cookies popup development. `git checkout -b cookies-popup`
3. Now we write all our code in the `cookies-popup` branch, we make good commits that are not too bit, not too small! We push our branch so it is to be found in our forked repo. Cool, so far so good!
4. We now want the `cookies-popup` branch to go into https://github.com/HackYourFuture-CPH/ov-class09-fp. We do this with a pull request (PR). BUT BEFORE we do that, there are a couple of thing we need to do before:
   1. Lets say it took a week for us to write `cookies-popup` and in that time there were 5 branches merged into the `develop` branch of https://github.com/HackYourFuture-CPH/ov-class09-fp. Hmm that means that our `develop` branch on https://github.com/YOURUSERNAME/ov-class09-fp is out of date. So if we just created our PR we our feature might not work (because the codebase was changed). Lets say that in one of the 5 commits someone gave the body a `z-index` of 1. Our popup has no `z-index`, so when the cookies popup should be shown it is not visible. So we need to sync our `develop` branch with class07 `develop` branch. Marta talked about that, but read this aswell: https://help.github.com/en/articles/syncing-a-fork
   2. Okay, so now our  `develop` branch is in sync with class07 `develop`. Perfect! To get those 5 changes lets merge `develop` into `cookies-popup`
   3. **We now run our code** and see that the popup is not shown (see above why). Lets fix it by giving our `cookies-popup` a `z-index` of 2, create a new commit to our branch. 
   4. NEVER commit something that is not running! You will break the build for everyone! so ALWAYS run the code before you create your PR. 
5. Now we can go to https://github.com/HackYourFuture-CPH/ov-class09-fp and create a PR that merges `cookies-popup` into `develop`. This PR is really nice, check it out: https://github.com/HackYourFuture-CPH/class07-final-project/pull/89
6. Now we have made our PR, great. Someone is going to review this PR and might tell us to change a variable name. Now we simply make the change locally on the `cookies-popup`, make that commit, push it and this commit will automatically show up on the PR.
7. Everything look nice now and someone merges `cookies-popup` into `develop`. Awesome that was our first feature :) This maybe seems like a big hassle, but once you get used to it, it is not so bad!

## 💻 Working with code <a name = "code"></a>

- ALWAYS run code before a PR is made!
- No committing `console.log`
- No committing merge conflicts!
- Work in seperate files! When you make a new feature, the first thing you do is create a new file for that (of course if it makes sense). Especially for components. 


## 🚀 Deployment <a name = "deployment"></a>
There are two servers running:
1. Staging server - To deploy push to the `develop` branch
2. Production server - To deploy push to the `master` branch


## ⛏️ Built Using <a name = "built_using"></a>
- [MySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Knex](http://knexjs.org/) - Database management

## ✍️ Authors <a name = "authors"></a>
- [@benna100](https://github.com/benna100)

## 📜 Getting the HackYourFuture certificate <a name = "certificate"></a>
To get the certificate we need to make sure that you know our stack, for us to recommend you to another company. So how do we figure this out? We look through homework and we look through the commits you create in the final project. 

Its important to say that you dont need to be an expert in everything, not at all!! You can be more interested in the frontend or the backend, but we then need to see that interest. 

But if you are missing 4 react homeworks and the one you have committed is super basic. AND we dont see some more advanced react usage, well then it becomes super hard for us to recommend you to a company that does react. Because we simply dont know if you have the skills. 

If we fell there are gaps, we will talk with you as early as possible, so you have time to show your worth!

If it comes so far that we cannot give you a certificate you can either join for the next final project or make a project (or we give you a project) where you show your skills. We truly want to give you the certificate and will help you as much as we can to get you there!

A little more specific here is what we are looking for:
- Semantic html
- Styling
    - Responsiveness
    - Layout
    - If it looks pretty DOES NOT MATTER!
- Javascript
    - Variable naming
    - Function scope
    - ES6
    - `Classes`, `promises`, `map`, `filter` and all that shabang
- Node
    - Express
    - Nice structure
    - Can create an api using the database. CRUD
    - Everything modularized (Split into smaller parts)
- Database
    - Create tables
    - Queries
- React
    - Using the react way of developing, SUPER IMPORTANT! https://reactjs.org/docs/thinking-in-react.html
    - Knows how to use state and prop
    - Well designed components
    - Can use the api created from node

