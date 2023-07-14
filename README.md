# PROJECT 2

- **Project Name:** My Video Games List
- **Project By:** Michael Delvecchio
- [**LINK TO GITHUB**](https://github.com/Dvec319/project-2)
- [**LINK TO DEPLOYED WEBSITE**](https://videogame-app.onrender.com/)
- **List of Technologies used:** HTML, JS, CSS, Node, Express, EJS, Mongo, Google Fonts
- [**LINK TO TRELLO**](https://trello.com/b/5miNkPwX/my-favorite-video-game-list)


## Description

In this project I'm going to create an app that allows users to make a list of their favorite video games. They will be prompted to put in the name, release year, publisher, an image, and a brief description of the game itself. Said user will be able to edit an already existing video game on their list or delete one from it all together.

## Mockup of UI

- ![Desktop View](https://i.imgur.com/ZyJK9Cw.png)
- ![Mobile View](https://i.imgur.com/CJvbTh7.png)

## Finished Website

- ![Desktop View Landing](https://i.imgur.com/IdoMJ9D.png)
- ![Mobile View Landing](https://i.imgur.com/Kp22dIB.png)
- ![Desktop View Index](https://i.imgur.com/JRCGWpw.png)
- ![Mobile View Index](https://i.imgur.com/yQphlDB.png)
- ![Desktop View Show](https://i.imgur.com/mgwE0wK.png)
- ![Mobile View Edit](https://i.imgur.com/IAEt3H8.png)
- ![Desktop View New](https://i.imgur.com/EXPrDWL.png)

## List of Backend Endpoints

|     ENDPOINT     | METHOD |                             PURPOSE                             |
| ---------------- | ------ | --------------------------------------------------------------- |
| /games           | GET    | Display list of games                                           |
| /games/new       | GET    | Create a new game                                               |
| /games/:id       | DELETE | Delete an existing game                                         |
| /games/:id       | PUT    | Update an existing game                                         |
| /games           | POST   | Put the new game on the list                                    |
| /games/:id/:edit | GET    | Edit an existing game                                           |
| /games/:id       | GET    | Display one game                                                |
| ---------------- | ------ | --------------------------------------------------------------- |
| /                | GET    | Render the landing page for the user                            |
| /signup          | GET    | Create a new user                                               |
| /signup          | POST   | Add new user to the data base                                   |
| /login           | GET    | Display login page to user                                      |
| /login           | POST   | Check if the user information matches, if so redirect to /games |
| /logout          | GET    | End the users current session and redirect to /                 |

## ERD (ENTITY RELATIONSHIP DIAGRAM)

![PICTURE OF ERD](https://i.imgur.com/97wh3h2.png)
