import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

const numeros$ = of(1, 2, 3).pipe(startWith(0), endWith(4));

numeros$.subscribe(console.log);
