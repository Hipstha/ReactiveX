import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcomulador = (acc, cur) => {
  return acc + cur;
};

// REDUCE
from(numeros).pipe(reduce(totalAcomulador, 0)).subscribe(console.log);

// scan
from(numeros).pipe(scan(totalAcomulador, 0)).subscribe(console.log);

//redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}
const user: Usuario[] = [
  {
    id: "fher",
    autenticado: false,
    token: null,
  },
  {
    id: "fher",
    autenticado: true,
    token: "abc",
  },
  {
    id: "fher",
    autenticado: true,
    token: "123",
  },
];

const state$ = from(user).pipe(
  scan<Usuario>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
