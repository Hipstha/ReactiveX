import { fromEvent } from "rxjs";
import { first, take, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");
// click$.subscribe(console.log);

click$
  .pipe(
    tap(() => console.log("tap")),
    first<MouseEvent>((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
