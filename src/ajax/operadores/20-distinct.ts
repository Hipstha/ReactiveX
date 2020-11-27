import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
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

from(personajes)
  .pipe(distinct((p) => p.nombre))
  .subscribe(console.log);
