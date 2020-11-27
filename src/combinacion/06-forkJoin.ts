import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);
const intervalo$ = interval(1000).pipe(take(3));

const letras$ = of("a", "b", "c").pipe(delay(3500));

// forkJoin(numeros$, intervalo$, letras$).subscribe(console.log);

// forkJoin(numeros$, intervalo$, letras$).subscribe((resp) => {
//   console.log("numeros: ", resp[0]);
//   console.log("intérvalo:", resp[1]);
//   console.log("letras: ", resp[2]);
// });

forkJoin({ num: numeros$, int: intervalo$, let: letras$ }).subscribe((resp) => {
  console.log(resp);
});
