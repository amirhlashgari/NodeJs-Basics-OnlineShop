# NodeJs Tutorial OnlineShop

## Description
this repository contains my training process while coding along with nodejs express basics course academind by [Maximilian Schwarzmüller](https://www.linkedin.com/in/maximilian-schwarzmueller/). 
It has both mysql and mongodb(nosql) database setup.  

#### IMPORTANT:
please pay attention to branch history, after every major step of developement I create a branch from it while work progression.

## Usage

### Installing
you should start with `npm install` to create node_modules folder according to defined packages in `package.json` file.

### Used Stacks

  - Express as backend
  - EJS as templating engine(Frontend)
  - Mongoose as ODM for connecting to Mongodb database
  - Sequelize as ORM for connecting to mysql database

### Folder Structure

```
NodeJs-Basics-OnlineShop/     # Root directory
|- controllers/      # where our route functions exist
|- middleware/     # is-auth middleware for authentication validation
|- models/     # data schemas
|- public/     # assets
|- routes/     # api routes
|- util/     #path and fs functions setup
|- views/     #frontend using ejs

```

### Start

`npm start`: run project in `http://localhost:3000/`.
