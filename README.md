# PROJECT 2

- **Project Name:** My Video Games List
- **Project By:** Michael Delvecchio
- [**LINK TO GITHUB**](https://github.com/Dvec319/project-2)
- [**LINK TO DEPLOYED WEBSITE**](https://videogame-app.onrender.com/)
- **List of Technologies used:** HTML, JS, CSS, Node, Express, EJS, Mongo
- [**LINK TO TRELLO**](https://trello.com/b/5miNkPwX/my-favorite-video-game-list)


## Description

In this project I'm going to create an app that allows users to make a list of their favorite video games. They will be prompted to put in the name, release year, publisher, an image, and a brief description of the game itself. Said user will be able to edit an already existing video game on their list or delete one from it all together.

## Mock Up of UI

- ![Desktop View](https://i.imgur.com/ZyJK9Cw.png)
- ![Mobile View](https://i.imgur.com/CJvbTh7.png)

## List of Backend Endpoints

|  ENDPOINT  | METHOD |           PURPOSE            |
| ---------- | ------ | ---------------------------- |
| /gamelist  | GET    | Display list of games        |
| /new       | GET    | Create a new game            |
| /:id       | DELETE | Delete an existing game      |
| /:id       | PUT    | Update an existing game      |
| /gamelist  | POST   | Put the new game on the list |
| /:id/:edit | GET    | Edit an existing game        |
| /:id       | GET    | Display one game             |

## ERD (ENTITY RELATIONSHIP DIAGRAM)

![PICTURE OF ERD](https://i.imgur.com/97wh3h2.png)
