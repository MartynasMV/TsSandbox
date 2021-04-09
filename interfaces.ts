/* function showTodo(todo: { title: string; text: string }) {
  console.log(todo.title + " : " + todo.text);
}

var myTodo = { title: "Trash", text: "take out trash" };
showTodo(myTodo);

 */

//cleaner way to do it:

interface toDo {
  title: string;
  text: string;
}

function showTodo(todo: toDo) {
  console.log(todo.title + " : " + todo.text);
}

let myTodo = { title: "Trash", text: "take out the trash" };

showTodo(myTodo);
