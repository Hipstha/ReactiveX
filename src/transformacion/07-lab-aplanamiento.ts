import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  map,
  mergeMap,
  tap,
  pluck,
  catchError,
  switchMap,
  exhaustMap,
} from "rxjs/operators";

// Helper
const peticionHttpLogin = (userPass) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    pluck("response", "token"),
    catchError((err) => of("error"))
  );

// creando un form
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const pass = document.createElement("input");
const submit = document.createElement("button");

// Configuracions es aestos casos
inputEmail.type = "Email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

pass.type = "password";
pass.placeholder = "password";
pass.value = "cityslicka";

submit.innerHTML = "ingresar";

form.append(inputEmail, pass, submit);
document.querySelector("body").append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
  exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe((token) => {
  console.log(token);
});
