import { from, fromEvent, of, range } from "rxjs";
import { filter, map, pluck } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

range(1, 10).pipe(
  filter((val, i) => {
    console.log("index", i);
    return val % 2 === 1;
  })
);
// .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "Heroe",
    nombre: "Batman",
  },
  {
    tipo: "Heroe",
    nombre: "Robin",
  },
  {
    tipo: "Villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(filter((p) => p.tipo === "Heroe"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), // keyboardEvent, string
  filter((code) => code === "Enter")
);

keyup$.subscribe(console.log);
