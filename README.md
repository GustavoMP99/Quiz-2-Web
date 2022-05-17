# Quiz-2-Web


### Prerequisites and extra

 To run this you have to "npm i" and if you want to run it constanly "npm run dev".
 
 
### Info about
This code have all the crud to an user, profesor, curso, practica, tema and curso_practica.

This is for an homework of an webdevelopment course.

### How to use it
To call the apis all the methods have to come with "localchost:3000/table/action" (in case that you are hosting the app in your own pc and you don´t have some port assignated) and send data in a json if required.

For example to delete a user you have to use the api, "localchost:3000/usuario/delete" and send a json with the id pf the user.

In case that you dont add some action, the code is going to get all the table that you put in the api.

For example if you put "localchost:3000/usuario", is going to get all the users with its data.

Usuario is the only one that have one function that doesnt have the other, "/login", with this the user can send a json with the username and the password and if its correct, the api send an AccessToken of that user.

### General functions

- /

- /create

- /delete

- /edit

All this actions need to receive something to do the actions, except the get, the one that you dont have to add an action.

To create something you have to send all the data of that thing to create a object with that data.

To delete, you have to send an id.

To edit,you have to send an id and the data that you want to edit.

### Built With

* [Nodejs](https://nodejs.org/es/)
* [Express](https://expressjs.com/es/)
* [MongoDB](mongodb.com)

### Reference  
* [Backend con Nodejs, Express y Mongodb](https://www.youtube.com/watch?v=ARIzrNwA5HQ) 
