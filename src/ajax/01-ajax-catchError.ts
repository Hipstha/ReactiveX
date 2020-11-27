import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";

const url = "https://api.github.com/userss?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  console.warn("Error en:", err.message);
  return of([]);
};

const fetchPromesa = fetch(url);

// fetchPromesa
//   .then((resp) => resp.json())
//   .then((data) => console.log("data: ", data))
//   .catch((err) => console.warn("Error en usuarios", err));

// fetchPromesa
//   .then(manejaErrores)
//   .then((resp) => resp.json())
//   .then((data) => console.log("data: ", data))
//   .catch((err) => console.warn("Error en usuarios", err));

ajax(url)
  .pipe(pluck("response"), catchError(atrapaError))
  .subscribe((users) => console.log("users: ", users));
