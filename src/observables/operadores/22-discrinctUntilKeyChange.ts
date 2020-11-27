import { of, from } from "rxjs";
import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from "rxjs/operators";

const numeros$ = of<number | string>(
  1,
  1,
  3,
  3,
  4,
  4,
  2,
  "1",
  4,
  2,
  2,
  65,
  7,
  "1"
);

numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "ZERO",
  },
  {
    nombre: "Dr Willy",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "ZERO",
  },
];

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
