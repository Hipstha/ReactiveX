import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  debounceTime,
  map,
  mergeAll,
  mergeMap,
  pluck,
  switchMap,
} from "rxjs/operators";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";
const body = document.querySelector("body");

// Referencias
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = "";

  for (let usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchore = document.createElement("a");
    anchore.href = usuario.html_url;
    anchore.text = "ver página";
    anchore.target = "_black";

    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchore);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>("target", "value"),
  mergeMap<string, Observable<GithubUsersResp>>((texto) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
  ),
  pluck<GithubUsersResp, GithubUser[]>("items")
);
// .subscribe(mostrarUsuarios);

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
