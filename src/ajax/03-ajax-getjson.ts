import { ajax, AjaxError } from "rxjs/ajax";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";

const url = "https://httpbinsss.org/delay/1";
// const url = "https://api.github.com/users?per_page=5";

const manejaError = (resp: AjaxError) => {
  console.warn("error:", resp.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(catchError(manejaError)).subscribe({
  next: (val) => console.log("next", val),
  error: (err) => console.warn("Error en subs:", err),
  complete: () => console.log("complete"),
});
// obs2$.subscribe((data) => console.log(data));
