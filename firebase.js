import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBgWBdLgrKWzavJsUqghhWswvkAghIFE70",
    authDomain: "adding-todo-app.firebaseapp.com",
    databaseURL: "https://adding-todo-app.firebaseio.com",
    projectId: "adding-todo-app",
    storageBucket: "adding-todo-app.appspot.com",
    messagingSenderId: "1007306870917"
};

const initializeApp =  firebase.initializeApp(config)



export default initializeApp