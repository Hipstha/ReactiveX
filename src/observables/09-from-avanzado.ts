import { of, from } from "rxjs";

/*
  of: Toma argumentos y genera una secuencia
  from: array, promise, iterable, observable
*/

const observer = {
  next: (val) => console.log("Next", val),
  complet: () => console.log("Complete"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// for (let id of miIterable) {
//   console.log(id);
// }

from(miIterable).subscribe(observer);

// const src$ = from([1, 2, 3, 4, 5]);
// const src$ = of([1, 2, 3, 4, 5]);

// const src$ = from("Alejandro");
// const src$ = of("Alejandro");

const src$ = from(fetch("https://api.github.com/users/klerith"));

// src$.subscribe(async (resp) => {
//   console.log(resp);
//   const dataResp = await resp.json();
//   console.log(dataResp);
// });
// src$.subscribe(observer);
