import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const src$ = range(1, 100, asyncScheduler);

console.log("Inicio");
src$.subscribe(console.log);
console.log("fin");
